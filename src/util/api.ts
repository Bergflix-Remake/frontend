import { reactive } from 'vue';
import { useMutation, useQuery, UseMutationOptions } from 'vue-query';
import { ErrorResponse as TError } from '../models/custom';
import {
  StrapiCollectionResponse,
  StrapiSingleResponse,
  UsersPermissionsUser,
} from '@/models/types';
import { apiBase } from './paths';

export type StrapiRequestParams = Record<string, unknown>;

type RequestOptions = {
  params?: StrapiRequestParams;
  data?: unknown;
  auth?: boolean;
};

const COOKIE_KEY = 'strapi_jwt';

const readCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}=([^;]*)`,
    ),
  );
  return match ? decodeURIComponent(match[1]) : null;
};

const writeCookie = (name: string, value: string) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(
    value,
  )}; path=/; SameSite=Lax`;
};

const clearCookie = (name: string) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; path=/; Max-Age=0; SameSite=Lax`;
};

/** Serialise Strapi's nested query syntax: filters[id][$eq]=1 */
export const toQuery = (params?: StrapiRequestParams): string => {
  if (!params) return '';
  const parts: string[] = [];
  const add = (key: string, value: unknown) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) {
      value.forEach((entry, index) => add(`${key}[${index}]`, entry));
      return;
    }
    if (typeof value === 'object') {
      Object.entries(value as Record<string, unknown>).forEach(([k, v]) =>
        add(`${key}[${k}]`, v),
      );
      return;
    }
    parts.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    );
  };
  Object.entries(params).forEach(([key, value]) => add(key, value));
  return parts.join('&');
};

export class StrapiError extends Error {
  error: TError['error'];

  constructor(payload: TError['error'], status = 500) {
    super(payload.message || payload.name || 'Strapi request failed');
    this.name = 'StrapiError';
    this.error = {
      status: payload.status ?? status,
      name: payload.name || 'ApplicationError',
      message: payload.message || 'Strapi request failed',
      details: payload.details,
    };
  }
}

export class StrapiClient {
  readonly url: string;
  token: string | null;
  user: UsersPermissionsUser | null = null;

  constructor(url: string) {
    this.url = url.replace(/\/+$/, '');
    this.token =
      readCookie(COOKIE_KEY) ||
      (typeof localStorage !== 'undefined'
        ? localStorage.getItem(COOKIE_KEY)
        : null);
  }

  private headers(auth = true): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (auth && this.token) headers.Authorization = `Bearer ${this.token}`;
    return headers;
  }

  private async parse(response: Response) {
    const text = await response.text();
    let payload: unknown = null;
    try {
      payload = text ? JSON.parse(text) : null;
    } catch {
      payload = { error: { message: text } };
    }
    if (!response.ok) {
      const error = (payload as TError)?.error || {
        status: response.status,
        name: response.statusText || 'RequestError',
        message: response.statusText,
      };
      if (response.status === 401 && this.token) {
        this.logout();
      }
      throw new StrapiError(error, response.status);
    }
    return payload;
  }

  async request<T = unknown>(
    method: string,
    path: string,
    options: RequestOptions = {},
  ): Promise<T> {
    const query = toQuery(options.params);
    const url = `${this.url}/api${path}${query ? `?${query}` : ''}`;
    const response = await fetch(url, {
      method,
      headers: this.headers(options.auth !== false),
      body:
        options.data === undefined ? undefined : JSON.stringify(options.data),
    });
    return (await this.parse(response)) as T;
  }

  async find<T>(
    contentType: string,
    params?: StrapiRequestParams,
  ): Promise<StrapiCollectionResponse<T>> {
    return this.request<StrapiCollectionResponse<T>>('GET', `/${contentType}`, {
      params,
      auth: !!this.token,
    });
  }

  async findOne<T>(
    contentType: string,
    documentId: string,
    params?: StrapiRequestParams,
  ): Promise<StrapiSingleResponse<T>> {
    return this.request<StrapiSingleResponse<T>>(
      'GET',
      `/${contentType}/${encodeURIComponent(documentId)}`,
      { params, auth: !!this.token },
    );
  }

  async resolveOne<T>(
    contentType: string,
    id: string | number,
    params?: StrapiRequestParams,
  ): Promise<T | null> {
    const raw = String(id);
    if (/^\d+$/.test(raw)) {
      const filters = {
        ...((params?.filters as Record<string, unknown>) || {}),
        id: { $eq: Number(raw) },
      };
      const response = await this.find<T>(contentType, {
        ...params,
        filters,
        pagination: { start: 0, limit: 1 },
      });
      return response.data[0] || null;
    }
    try {
      const response = await this.findOne<T>(contentType, raw, params);
      return response.data;
    } catch (error) {
      if (error instanceof StrapiError && error.error.status === 404) {
        return null;
      }
      throw error;
    }
  }

  async create<T>(contentType: string, data: unknown) {
    return this.request<StrapiSingleResponse<T>>('POST', `/${contentType}`, {
      data: { data },
    });
  }

  async update<T>(contentType: string, id: string | number, data: unknown) {
    const path =
      contentType === 'users' && id === 'me'
        ? '/users/me'
        : `/${contentType}/${id}`;
    return this.request<StrapiSingleResponse<T>>('PUT', path, {
      data: { data },
    });
  }

  async delete<T>(contentType: string, id: string | number) {
    return this.request<StrapiSingleResponse<T>>(
      'DELETE',
      `/${contentType}/${id}`,
    );
  }

  async login(authData: { identifier: string; password: string }) {
    const response = await this.request<{
      jwt: string;
      user: UsersPermissionsUser;
    }>('POST', '/auth/local', { data: authData, auth: false });
    this.setToken(response.jwt);
    this.user = response.user;
    return response;
  }

  async register(authData: {
    username: string;
    email: string;
    password: string;
  }) {
    const response = await this.request<{
      jwt?: string;
      user: UsersPermissionsUser;
    }>('POST', '/auth/local/register', { data: authData, auth: false });
    if (response.jwt) this.setToken(response.jwt);
    this.user = response.user;
    return response;
  }

  async changePassword(data: {
    currentPassword: string;
    password: string;
    passwordConfirmation: string;
  }) {
    return this.request<{ jwt: string; user: UsersPermissionsUser }>(
      'POST',
      '/auth/change-password',
      { data },
    );
  }

  async sendEmailConfirmation(data: { email: string }) {
    return this.request<{ email: string; sent: boolean }>(
      'POST',
      '/auth/send-email-confirmation',
      { data, auth: false },
    );
  }

  async fetchUser(params?: StrapiRequestParams) {
    if (!this.token) {
      this.user = null;
      return null;
    }
    try {
      const user = await this.request<UsersPermissionsUser>(
        'GET',
        '/users/me',
        {
          params,
        },
      );
      this.user = user;
      return user;
    } catch (error) {
      if (error instanceof StrapiError && error.error.status === 401) {
        this.logout();
        return null;
      }
      throw error;
    }
  }

  setToken(token: string) {
    this.token = token;
    writeCookie(COOKIE_KEY, token);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(COOKIE_KEY);
    }
  }

  logout() {
    this.token = null;
    this.user = null;
    clearCookie(COOKIE_KEY);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(COOKIE_KEY);
    }
  }
}

export const strapi = reactive(new StrapiClient(apiBase));

function useStrapiQuery<T>({
  queryKey: [contentType, params],
}: any): Promise<T> {
  return strapi.find(contentType, params).then((res) => res.data as T);
}

function useStrapiQueryOne<T>({ queryKey }: any): Promise<T | null> {
  const [contentType, id, params] = queryKey;
  return strapi.resolveOne<T>(contentType, id, params || {});
}

export const strapiLogout = () => {
  strapi.logout();
};

export const strapiLogin = (
  opts?: UseMutationOptions<
    Awaited<ReturnType<StrapiClient['login']>>,
    TError,
    { identifier: string; password: string },
    unknown
  >,
) => {
  return useMutation(
    (authData: { identifier: string; password: string }) =>
      strapi.login(authData),
    opts,
  );
};

export const strapiRegister = (
  opts?: UseMutationOptions<
    Awaited<ReturnType<StrapiClient['register']>>,
    TError,
    { username: string; email: string; password: string },
    unknown
  >,
) => {
  return useMutation(
    (authData: { username: string; email: string; password: string }) =>
      strapi.register(authData),
    opts,
  );
};

type StrapiUpdateData<T> = {
  contentType: string;
  id: string | number;
  data: T;
  params?: StrapiRequestParams;
};

export const useStrapiUpdateMutation = <
  TData,
  TVariables = Partial<TData>,
  TContext = Partial<TData>,
>(
  opts?: UseMutationOptions<
    StrapiSingleResponse<TData>,
    TError,
    StrapiUpdateData<TVariables>,
    TContext
  >,
) => {
  return useMutation(
    async (data: StrapiUpdateData<TVariables>) =>
      await strapi.update<TData>(data.contentType, data.id, data.data),
    opts,
  );
};

export const useResendEmailMutation = () =>
  useMutation<void, TError, { email: string }, unknown>(
    async (data: { email: string }) => {
      await strapi.sendEmailConfirmation(data);
    },
  );

export function useStrapi<T>(
  queryKey: [string, StrapiRequestParams?],
  options?: any,
) {
  return reactive(
    useQuery<T, TError>(queryKey as any, useStrapiQuery as any, options),
  );
}

export function useStrapiOne<T>(
  queryKey: [string, any, StrapiRequestParams?],
  options?: any,
) {
  return reactive(
    useQuery<T | null, TError>(
      queryKey as any,
      useStrapiQueryOne as any,
      options,
    ),
  );
}

export function getUser(props?: StrapiRequestParams, opts?: any) {
  return reactive(
    useQuery<UsersPermissionsUser, TError>(
      ['user', props] as any,
      (async () => {
        const user = await strapi.fetchUser(props);
        if (!user) throw new Error('User not logged in');
        return user;
      }) as any,
      {
        retry: false,
        enabled: !!strapi.token,
        ...opts,
      },
    ),
  );
}

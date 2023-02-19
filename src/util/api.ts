// Strapi Query Client //
import { ErrorResponse as TError } from '../models/custom';
import Strapi, { StrapiAuthenticationData, StrapiRequestParams, StrapiBaseRequestParams, StrapiAuthenticationResponse, StrapiResponse, StrapiRegistrationData, StrapiEmailConfirmationData } from '@anniken/strapi-sdk-js'
import { QueryKey } from 'react-query/types/core';
import { useMutation, useQuery, UseQueryOptions, UseQueryReturnType, UseMutationOptions } from 'vue-query';
import { reactive, UnwrapNestedRefs } from 'vue';
import { ResponseCollectionMeta, UsersPermissionsUser } from '@/models/types';

export const strapi = reactive(new Strapi({
	store: {
		key: "strapi_jwt",
		useLocalStorage: false,
		cookieOptions: { path: "/" },
	},
	url: "https://api.bergflix.de/",
	prefix: "/api",
}));

function useStrapiQuery<T>({ queryKey }: any) {
	return strapi
		.find<T>(queryKey[0], queryKey[1] ? queryKey[1] : {})
		.then((res) => {
			return res.data as T;
		});
}

function useStrapiQueryOne<T>({ queryKey }: any) {
	return strapi
		.findOne<T>(queryKey[0], queryKey[1], queryKey[2] ? queryKey[2] : {})
		.then((res) => {
			return res.data;
		});
}

export const strapiLogout = () => {
	strapi.logout();
};

export const strapiLogin = (opts?: UseMutationOptions<StrapiAuthenticationResponse, TError, StrapiAuthenticationData, unknown>) => {
	return useMutation(
		(authData: StrapiAuthenticationData) => strapi.login(authData),
		opts
	);
};
export const strapiRegister = (opts?: UseMutationOptions<StrapiAuthenticationResponse, TError, StrapiRegistrationData, unknown>) => {
	return useMutation(
		(authData: StrapiRegistrationData) => strapi.register(authData),
		opts
	);
};

type StrapiUpdateData<T> = { contentType: string, id: string | number, data: T, params?: StrapiBaseRequestParams }

export const useStrapiUpdateMutation = <TData, TVariables = Partial<TData>, TContext = Partial<TData>>(opts?: UseMutationOptions<StrapiResponse<TData>, TError, StrapiUpdateData<TVariables>, TContext>) => {
	return useMutation(async (data: StrapiUpdateData<TVariables>) => await strapi.update<TData>(data.contentType, data.id, data.data, data.params), opts);
}

export const useResendEmailMutation = () => useMutation<void, TError, StrapiEmailConfirmationData, unknown>(async (data: StrapiEmailConfirmationData) => await strapi.sendEmailConfirmation(data))

export function useStrapi<T>(
	queryKey: [string, StrapiRequestParams?],
	options?: Omit<
		UseQueryOptions<T, TError, T, QueryKey>,
		"queryFn" | "queryKey"
	>
): UnwrapNestedRefs<UseQueryReturnType<T, TError>> {
	return reactive(useQuery<T, TError>(queryKey, useStrapiQuery, options));
}

export function useStrapiSendEmailConfirmation(
	queryKey: [StrapiEmailConfirmationData],
	options?: Omit<UseQueryOptions<void, TError, void,
		[StrapiEmailConfirmationData]>, "queryKey" | "queryFn">
): UnwrapNestedRefs<UseQueryReturnType<void, TError>> {
	return reactive(useQuery(queryKey, async ({ queryKey }) => await strapi.sendEmailConfirmation(queryKey[0]), options));
}

export function useStrapiOne<T>(
	queryKey: [string, any, StrapiRequestParams?],
	options?: Omit<
		UseQueryOptions<T, TError, T, QueryKey>,
		"queryFn" | "queryKey"
	>
): UnwrapNestedRefs<UseQueryReturnType<T, TError>> {
	return reactive(useQuery<T, TError>(queryKey, useStrapiQueryOne, options));
}

export function getUser(opts?: Omit<UseQueryOptions<UsersPermissionsUser, TError, UsersPermissionsUser, QueryKey>, "queryFn" | "queryKey">): UnwrapNestedRefs<UseQueryReturnType<UsersPermissionsUser, TError>> {
	return reactive(
		useQuery<UsersPermissionsUser, TError>(
			"user",
			async () => {
				const user: UsersPermissionsUser = await strapi.fetchUser() as UsersPermissionsUser;
				if (!user) {
					throw new Error("User not logged in");
				}
				return user;
			},
			{
				retry: false,
				...opts,
			}
		)
	);
}

type FlattenedStrapiResponse<T> = T & {
	id: number;
	meta: ResponseCollectionMeta
}


export const flatten = <T>(data: any): FlattenedStrapiResponse<T> => {
	const { id, attributes } = data;
	return { id, ...attributes };
}
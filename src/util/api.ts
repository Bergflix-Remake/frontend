// Strapi Query Client //
import { ErrorResponse as TError } from '../models/custom';
import Strapi, { StrapiAuthenticationData, StrapiRequestParams, StrapiBaseRequestParams, StrapiAuthenticationResponse, StrapiResponse } from '@anniken/strapi-sdk-js'
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

type StrapiUpdateData<T> = { contentType: string, id: string | number, data: T, params?: StrapiBaseRequestParams }

export const useStrapiUpdateMutation = <T>(opts?: UseMutationOptions<StrapiResponse<T>, TError, StrapiUpdateData<T>, unknown>) => {
	return useMutation(async (data: StrapiUpdateData<T>) => await strapi.update<T>(data.contentType, data.id, data.data, data.params), opts);
}

export function useStrapi<T>(
	queryKey: [string, StrapiRequestParams?],
	options?: Omit<
		UseQueryOptions<T, TError, T, QueryKey>,
		"queryFn" | "queryKey"
	>
): UnwrapNestedRefs<UseQueryReturnType<T, TError>> {
	return reactive(useQuery<T, TError>(queryKey, useStrapiQuery, options));
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

export function getUser(): UnwrapNestedRefs<UseQueryReturnType<UsersPermissionsUser, TError>> {
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
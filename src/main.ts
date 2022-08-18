import { createApp, reactive, UnwrapNestedRefs } from 'vue';
import App from "./App.vue";
import "./assets/font.css";
import "./index.css";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from "./router";
import { store } from "./store";
import {
	VueQueryPlugin,
	useMutation, useQuery, UseQueryOptions, UseQueryReturnType
} from 'vue-query';
import "./three-dots.css";
import { createHead } from '@vueuse/head'

// Strapi Query Client //
import { ErrorResponse as TError } from './models/custom';
import Strapi, { StrapiAuthenticationData, StrapiRequestParams, StrapiUser } from 'strapi-sdk-js'
import { QueryKey } from 'react-query/types/core';

const app = createApp(App);
const head = createHead();

// Vue Plugins //
app.use(head);
app.use(VuePlyr, {
	plyr: {},
});
app.use(router);
app.use(store);
app.use(VueQueryPlugin);

export const strapi = new Strapi({
	store: {
		key: "strapi_jwt",
		useLocalStorage: false,
		cookieOptions: { path: "/" },
	},
	url: "https://api.bergflix.de/",
	prefix: "/api",
});

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

export const strapiLogin = () => {
	return useMutation((authData: StrapiAuthenticationData) =>
		strapi.login(authData)
	);
};

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

export function getUser(): UnwrapNestedRefs<UseQueryReturnType<StrapiUser, TError>> {
	return reactive(
		useQuery<StrapiUser, TError>(
			"user",
			async () => {
				const user: StrapiUser = await strapi.fetchUser();
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

app.mount("#app");

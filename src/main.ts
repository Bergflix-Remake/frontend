import { Error as TError } from "./models/types";
import { createApp, reactive } from "vue";
import App from "./App.vue";
import "./assets/font/stylesheet.css";
import "./index.css";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
import { router } from "./router";
import { store } from "./store";
import Markdown from "vue3-markdown-it";
import {
	VueQueryPlugin,
	useQuery,
	UseQueryOptions,
	useMutation,
	QueryClient,
} from "vue-query";
import "./three-dots.css";
import Strapi, { StrapiAuthenticationData, StrapiUser } from "strapi-sdk-js";
import { QueryKey } from "react-query/types/core";

const app = createApp(App);

// App.use thingys
app.use(VuePlyr, {
	plyr: {},
});
app.use(router);
app.use(store);
app.use(Markdown);
app.use(VueQueryPlugin);

// Strapi Query Client

const queryClient = new QueryClient();

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
		.find(queryKey[0], queryKey[1] ? queryKey[1] : {})
		.then((res) => {
			return res.data as T;
		});
};

export const strapiLogout = () => {
	strapi.logout();
};

export const strapiLogin = () => {
	return useMutation((authData: StrapiAuthenticationData) =>
		strapi.login(authData)
	);
};

export function useStrapi<T>(
	queryKey: any,
	options?: Omit<
		UseQueryOptions<T, TError, T, QueryKey>,
		"queryFn" | "queryKey"
	>
) {
	return reactive(useQuery<T, TError>(queryKey, useStrapiQuery, options));
}

export function getUser() {
	return reactive(
		useQuery<StrapiUser, Error>("user", async () => {
			const user = await strapi.fetchUser();
			console.log(user);
			if (!user) {
				throw new Error("User not logged in");
			}
			return user;
		}, {
			retry: false,
		})
	);
}


app.mount("#app");

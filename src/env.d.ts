/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_MEDIA_URL?: string;
  readonly VITE_CDN_URL?: string;
  readonly VITE_MEILISEARCH_HOST?: string;
  readonly VITE_MEILISEARCH_API_KEY?: string;
  readonly VITE_MEILISEARCH_INDEX?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}
declare module 'vue-plyr';
declare module '@heroicons/*';
declare module 'vue-instantsearch/*';
declare module 'vue-confetti';

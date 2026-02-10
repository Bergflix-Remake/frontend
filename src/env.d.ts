/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}
declare module 'vue-plyr';
declare module '@heroicons/*';
declare module 'vue-instantsearch/*';
declare module 'vue-confetti';

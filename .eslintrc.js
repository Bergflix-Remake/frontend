require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'standard',
    'prettier',
    '@vue/eslint-config-typescript',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue'],
  settings: {},
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'debug'],
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  },
  ignorePatterns: ['src/models/*'],
};

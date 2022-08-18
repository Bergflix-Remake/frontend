require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard', 'prettier', 'plugin:storybook/recommended', '@vue/eslint-config-typescript'],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  settings: {
  },
  rules: {
    'no-console': ['error', {
      allow: ['warn', 'error', 'debug']
    }],
    'vue/multi-word-component-names': 'off',
  },
  "ignorePatterns": ["src/models/*"]
};
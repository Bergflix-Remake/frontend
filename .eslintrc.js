module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
  }
}

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "standard",
    "prettier",
    "@vue/eslint-config-typescript"
  ),
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error", "debug"] }],
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
    },
  },
  {
    ignores: ["src/models/*"],
  },
];

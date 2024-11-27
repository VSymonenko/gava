import functional from 'eslint-plugin-functional';
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  functional.configs.externalVanillaRecommended,
  functional.configs.recommended,
  functional.configs.stylistic,
  functional.configs.disableTypeChecked,
  {
    rules: {
      'functional/functional-parameters': [
        'error',
        {
          enforceParameterCount: false,
        },
      ],
      'functional/no-throw-statements:': 'warn',
    },
  },
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
];
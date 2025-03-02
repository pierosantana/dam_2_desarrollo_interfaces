import globals from "globals";
import pluginJs from "@eslint/js";
import neostandard from "neostandard";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...neostandard()
];
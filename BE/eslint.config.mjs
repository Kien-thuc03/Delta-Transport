// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
//   pluginReact.configs.flat.recommended,
// ]);
module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: ['eslint:recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module', allowImportExportEverywhere: true },
    settings: { react: { version: '18.2' } },
    plugins: [],
    rules: {
        'no-console': 1,
        'no-lonely-if': 1,
        'no-unused-vars': 1,
        'no-trailing-spaces': 1,
        'no-multi-spaces': 1,
        'no-multiple-empty-lines': 1,
        'space-before-blocks': ['error', 'always'],
        'object-curly-spacing': [1, 'always'],
        'indent': ['warn', 2],
        'semi': [1, 'never'],
        'quotes': ['error', 'single'],
        'array-bracket-spacing': 1,
        'linebreak-style': 0,
        'no-unexpected-multiline': 'warn',
        'keyword-spacing': 1,
        'comma-dangle': 1,
        'comma-spacing': 1,
        'arrow-spacing': 1
    }
}
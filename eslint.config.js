import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^React$" }, // Ignore unused `React`
      ],
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Add a separate configuration for Jest test files
    files: ["**/*.test.{js,jsx}", "**/*.spec.{js,jsx}", "**/test/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Browser globals (optional for tests)
        ...globals.jest, // Jest globals from "globals" package
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "off", // Adjust rules for test files
    },
  },
  // Add a separate configuration for setup.js file
  {
    files: ["test/setup.js"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node, // Add Node.js globals
      },
      parserOptions: {
        sourceType: "module",
      },
    },
    rules: {
      "no-undef": "off", // Optional: Turn off `no-undef` for setup files if necessary
    },
  },
];

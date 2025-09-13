import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    plugins: ["import"],
    extends: ["plugin:import/recommended", "plugin:import/typescript"],
    rules: {
      // Prevent duplicate imports
      "import/no-duplicates": "error",

      // Ensure imports exist
      "import/no-unresolved": "error",

      // Prevent importing from dev dependencies in production code
      "import/no-extraneous-dependencies": [
        "warn",
        {
          devDependencies: [
            "**/*.test.{js,jsx,ts,tsx}",
            "**/*.spec.{js,jsx,ts,tsx}",
            "**/test/**/*",
            "**/tests/**/*",
            "**/__tests__/**/*",
            "**/jest.config.js",
            "**/jest.setup.js",
            "**/next.config.*",
            "**/tailwind.config.*",
            "**/postcss.config.*",
            "**/eslint.config.*",
          ],
        },
      ],

      // Prefer default exports for single exports
      "import/prefer-default-export": "off", // Often conflicts with named exports pattern

      // Ensure proper file extensions
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],

      // Prevent circular dependencies
      "import/no-cycle": "error",

      // Ensure imports are at the top
      "import/first": "error",

      // Require newline after imports
      "import/newline-after-import": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  }),
];

export default eslintConfig;

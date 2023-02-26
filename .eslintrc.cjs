module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard-with-typescript',
    'stylelint',
    'prettier'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.vue'],
  },
  plugins: [
    'vue',
  ],
  rules: {
    'sort-imports': 'off',
    'node/no-missing-import': 'off',
    'vue/multi-word-component-names': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
  },
  ignorePatterns: ['vite.config.ts', 'dist', 'node_modules'],
}
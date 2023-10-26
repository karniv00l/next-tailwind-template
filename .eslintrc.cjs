/* eslint-env node */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine": "auto"
    }],
  },
};

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'standard', 'prettier-standard/prettier-file'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: ['node_modules'],
  globals: { NodeJS: true },
  env: {
    node: true,
    jest: true,
  },
  root: true,
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': ['error', { allow: ['error'] }],
    'no-new': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
}

module.exports = {
  extends: ['./configs/eslint.js', './configs/typescript.js', './configs/react.js'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
}

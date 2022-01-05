module.exports = {
  extends: [
    './configs/eslint.js',
    './configs/typescript.js',
    './configs/react.js',
    './configs/prettier.js',
    'plugin:eslint-plugin-smarthr/recommended',
  ],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',

    // original rules
    'smarthr/a11y-icon-button-has-name': 'error',
    'smarthr/absolute-import-path': 'off',
    'smarthr/jsx-start-with-spread-attributes': 'off',
    'smarthr/no-import-other-domain': 'off',
    'smarthr/prohibit-import': 'off',
    'smarthr/redundant-name': 'off',
  },
}

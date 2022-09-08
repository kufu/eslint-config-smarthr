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
    'smarthr/a11y-clickable-element-has-text': 'error',
    'smarthr/a11y-image-has-alt-attribute': 'error',
    'smarthr/a11y-trigger-has-button': 'error',
    'smarthr/best-practice-for-date': 'error',
    'smarthr/jsx-start-with-spread-attributes': [
      'error',
      {
        fix: true,
      },
    ],
    'smarthr/prohibit-export-array-type': 'error',
    'smarthr/require-barrel-import': 'error',
  },
}

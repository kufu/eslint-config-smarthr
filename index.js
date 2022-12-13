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
    'smarthr/a11y-prohibit-input-placeholder': 'warn',
    'smarthr/a11y-trigger-has-button': 'error',
    'smarthr/best-practice-for-date': 'error',
    'smarthr/format-import-path': 'off',
    'smarthr/format-translate-component': 'off',
    'smarthr/jsx-start-with-spread-attributes': [ 'error', { fix: true } ],
    'smarthr/no-import-other-domain': 'off',
    'smarthr/prohibit-export-array-type': 'error',
    'smarthr/prohibit-file-name': 'off',
    'smarthr/prohibit-import': 'off',
    'smarthr/redundant-name': 'off',
    'smarthr/require-barrel-import': 'error',
    'smarthr/require-declaration': 'off',
    'smarthr/require-export': 'off',
    'smarthr/require-import': 'off',
    'smarthr/trim-props': 'error',
  },
}

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
    'smarthr/a11y-anchor-has-href-attribute': 'error',
    'smarthr/a11y-clickable-element-has-text': 'error',
    'smarthr/a11y-delegate-element-has-role-presentation': 'error',
    'smarthr/a11y-form-control-in-form': 'warn', // TODO: 2024/11/1にwarn化。1mくらいを目処に問題なければerrorに変更予定
    'smarthr/a11y-heading-in-sectioning-content': 'error',
    'smarthr/a11y-image-has-alt-attribute': 'error',
    'smarthr/a11y-input-has-name-attribute': 'error',
    'smarthr/a11y-input-in-form-control': 'error',
    'smarthr/a11y-numbered-text-within-ol': 'error',
    'smarthr/a11y-prohibit-input-maxlength-attribute': 'error',
    'smarthr/a11y-prohibit-input-placeholder': 'error',
    'smarthr/a11y-prohibit-sectioning-content-in-form': 'warn', // TODO: 2024/11/5にwarn化。1mくらいを目処に問題なければerrorに変更予定
    'smarthr/a11y-prohibit-useless-sectioning-fragment': 'error',
    'smarthr/a11y-replace-unreadable-symbol': 'error',
    'smarthr/a11y-trigger-has-button': 'error',
    'smarthr/best-practice-for-button-element': 'error',
    'smarthr/best-practice-for-date': 'error',
    'smarthr/best-practice-for-layouts': 'error',
    'smarthr/best-practice-for-remote-trigger-dialog': 'error',
    'smarthr/format-import-path': 'off',
    'smarthr/format-translate-component': 'off',
    'smarthr/jsx-start-with-spread-attributes': [ 'error', { fix: true } ],
    'smarthr/no-import-other-domain': 'off',
    'smarthr/prohibit-export-array-type': 'error',
    'smarthr/prohibit-file-name': 'off',
    'smarthr/prohibit-import': 'off',
    'smarthr/prohibit-path-within-template-literal': 'off',
    'smarthr/require-barrel-import': 'error',
    'smarthr/require-declaration': 'off',
    'smarthr/require-export': 'off',
    'smarthr/require-import': 'off',
    'smarthr/trim-props': 'error',
  },
}

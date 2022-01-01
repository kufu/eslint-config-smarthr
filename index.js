const rulesDirPlugin = require('eslint-plugin-rulesdir')

rulesDirPlugin.RULES_DIR = './rules'

module.exports = {
  extends: [
    './configs/eslint.js',
    './configs/typescript.js',
    './configs/react.js',
    './configs/prettier.js',
  ],
  plugins: ['rulesdir'],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',

    // original rules
    'rulesdir/a11y-icon-button-has-name': 'error',
  },
}

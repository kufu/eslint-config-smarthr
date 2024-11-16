import js from '@eslint/js'
import * as importPlugin from 'eslint-plugin-import'

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  importPlugin.flatConfigs.recommended,
  {
    name: 'eslint-config-smarthr/eslint',
    rules: js.configs.recommended.rules,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      }
    },
  }
]

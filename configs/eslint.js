import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  js.configs.recommended,
  {
    plugins: [importPlugin],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      }
    },
  }
]

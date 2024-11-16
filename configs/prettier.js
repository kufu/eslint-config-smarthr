import { rules } from 'eslint-config-prettier'

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  {
    rules: {
      ...rules,
    }
  }
]

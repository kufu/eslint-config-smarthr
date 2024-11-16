import * as Prettier from 'eslint-config-prettier'

/**
 * @type {import('eslint').Linter.Config}
 */
export default [
  {
    name: 'eslint-config-smarthr/prettier',
    rules: {
      ...Prettier.rules,
    }
  }
]

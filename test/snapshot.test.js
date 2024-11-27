import { loadESLint } from 'eslint'
import { expect,test } from 'vitest'

test('should match ESLint Configuration snapshot', async () => {
  const DefaultESLint = await loadESLint({ useFlatConfig: true })
  const eslint = new DefaultESLint({
    cwd: import.meta.dirname
  })
  const config = await eslint.calculateConfigForFile('index.js')
  expect(config).toMatchSnapshot()
})

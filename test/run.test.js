const runLint = require('./lib/runLint')

describe('fixtures', () => {
  it('should match the snapshot', async () => {
    const result = await runLint('./index.js', './test/fixtures')
    expect(result).toMatchSnapshot()
  })
})

const runLint = require('./lib/runLint')

describe('fixtures', () => {
  it('should match the snapshot', () => {
    const result = runLint('./index.js', './test/fixtures')
    expect(result).toMatchSnapshot()
  })
})

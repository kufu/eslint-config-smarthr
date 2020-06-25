'use strict'

const { ESLint } = require('eslint')
const path = require('path')

const runLintWithFixtures = async (configFile, target) => {
  const eslint = new ESLint({
    overrideConfigFile: configFile,
    ignore: false,
    useEslintrc: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  })
  const lintResult = await eslint.lintFiles([target])
  // console.log(JSON.stringify(lintResult, null, 2))

  return lintResult.reduce((results, { filePath, messages }) => {
    return Object.assign(results, {
      [path.basename(filePath)]: messages.reduce(
        (resultPerFile, { severity, ruleId }) => {
          switch (severity) {
            // warning
            case 1:
              resultPerFile.warnings.push(ruleId)
              break
            // errors
            case 2:
              resultPerFile.errors.push(ruleId)
              break
            default:
              throw new Error(`Got an unknown severity: ${severity}(${ruleId})`)
          }
          return resultPerFile
        },
        { warnings: [], errors: [] },
      ),
    })
  }, {})
}

module.exports = runLintWithFixtures

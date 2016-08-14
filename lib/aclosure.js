/**
 * Closure compiler
 * @function aclosure
 * @param {string} src - Source file name
 * @param {string} dest - Destination file name
 * @returns {Promise}
 */
'use strict'

const { execSync } = require('child_process')
const co = require('co')
const writeout = require('writeout')
const hasbin = require('hasbin')

/** @lends aclosure */
function aclosure (src, dest, options = {}) {
  let {
    languageIn = 'ECMASCRIPT6',
    languageOut = 'ECMASCRIPT5',
    compilationLevel = 'SIMPLE_OPTIMIZATIONS',
    warningLevel = 'QUIET',
    createSourceMap = `${dest}.map`,
    sourceMapInput = false
  } = options
  return co(function * () {
    const bin = 'ccjs'
    let has = yield new Promise((resolve) =>
      hasbin(bin, (has) => resolve(has))
    )
    if (!has) {
      throw new Error('closurecompiler not found. Try `npm -g install closurecompiler`')
    }
    let command = `${bin} ${src} --language_in=${languageIn} --language_out=${languageOut} --compilation_level=${compilationLevel} --warning_level=${warningLevel}`
    if (createSourceMap) {
      command += ` --create_source_map=${createSourceMap}`
      if (sourceMapInput) {
        command += ` --source_map_input=${sourceMapInput} --output_wrapper="(function(){%output%})()\n//# sourceMappingURL=${createSourceMap}"`
      }
    }
    let compiled = execSync(command).toString()
    let result = yield writeout(dest, compiled, {
      force: true,
      skipIfIdentical: true,
      mkdirp: true
    })
    if (!result.skipped) {
      console.log(`File generated: ${dest}`)
    }
  })
}

module.exports = aclosure

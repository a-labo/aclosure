/**
 * Closure compiler
 * @function aclosure
 * @param {string} src - Source file name
 * @param {string} dest - Destination file name
 * @returns {Promise}
 */
'use strict'

const { compiler: ClosureCompiler } = require('google-closure-compiler')
const path = require('path')
const co = require('co')
const writeout = require('writeout')

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
    let compiler = new ClosureCompiler(
      Object.assign({
        js: src,
        language_in: languageIn,
        language_out: languageOut,
        compilation_level: compilationLevel,
        warning_level: warningLevel,
        create_source_map: createSourceMap
      }, sourceMapInput ? {
        source_map_input: `${src}|${sourceMapInput}`,
        output_wrapper: `"(function(){%output%})()\n//# sourceMappingURL=${createSourceMap}"`
      } : {})
    )
    let compiled = yield new Promise((resolve, reject) => {
      compiler.run((exitCode, stdOut, stdErr) => {
        exitCode === 0 ? resolve(stdOut) : reject(new Error(stdErr))
      })
    })
    let result = yield writeout(dest, compiled.toString(), {
      force: true,
      skipIfIdentical: true,
      mkdirp: true
    })
    if (!result.skipped) {
      console.log(`File generated: ${path.relative(process.cwd(), dest)}`)
    }
  })
}

module.exports = aclosure

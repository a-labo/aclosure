/**
 * Closure compiler
 * @function aclosure
 * @param {string} src - Source file name
 * @param {string} dest - Destination file name
 * @returns {Promise}
 */
'use strict'

const { compile } = require('google-closure-compiler-js')
const co = require('co')
const writeout = require('writeout')
const { readFileAsync } = require('asfs')

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
    let jsCode = [
      { src: (yield readFileAsync(src)).toString(), path: src, sourceMap: sourceMapInput }
    ]
    let { compiledCode, errors, warnings, sourceMap } = compile({
      jsCode,
      languageIn,
      languageOut,
      compilationLevel,
      warningLevel,
      createSourceMap
    })
    for (let warning of warnings) {
      console.warn('[aclosure]', warning)
    }
    for (let error of errors) {
      console.error('[aclosure]', error)
    }
    let write = (filename, content) => co(function * () {
      let { skipped } = yield writeout(filename, content, {
        force: true,
        skipIfIdentical: true,
        mkdirp: true
      })
      if (!skipped) {
        console.log(`File generated: ${dest}`)
      }
    })
    if (createSourceMap) {
      yield write(createSourceMap, sourceMap)
    }
    yield write(dest, compiledCode)
  })
}

module.exports = aclosure

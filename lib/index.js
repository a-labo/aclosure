/**
 * Closure compiler wrapper
 * @module aclosure
 * @version 2.0.3
 */

'use strict'

const aclosure = require('./aclosure')

let lib = aclosure.bind(this)

Object.assign(lib, {
  aclosure
})

module.exports = lib

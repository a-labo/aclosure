'use strict'

const aclosure = require('aclosure')
const co = require('co')

co(function * () {
  // Compile script with closure compiler
  yield aclosure(
    'public/bundle.js',
    'public/bundle.cc.js'
  )
}).catch((err) => console.error(err))

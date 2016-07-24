/**
 * Test case for aclosure.
 * Runs with mocha.
 */
'use strict'

const aclosure = require('../lib/aclosure.js')
const assert = require('assert')
const co = require('co')

describe('aclosure', function () {
  this.timeout(12000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Aclosure', () => co(function * () {
    yield aclosure(
      `${__dirname}/../misc/mocks/mock-script-01.js`,
      `${__dirname}/../tmp/testing-script/testing-compiled-01.js`,
      {}
    )
  }))
})

/* global describe, before, after, it */

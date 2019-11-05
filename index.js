'use strict'

const createTop = require('process-top')

const process = require('./lib/process')
const os = require('./lib/os')

module.exports = opts => {
  const top = createTop(opts)
  const fn = () => ({ ...os(top), ...process(top) })
  fn.destroy = top.destroy
  return fn
}

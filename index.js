'use strict'

const createTop = require('process-top')

const process = require('./src/process')
const os = require('./src/os')

module.exports = opts => {
  const top = createTop(opts)
  const fn = () => ({ ...os(top), ...process(top) })
  fn.destroy = top.destroy
  return fn
}

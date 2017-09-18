'use strict'

const os = require('./lib/os')
const process = require('./lib/process')

module.exports = () => Object.assign({}, os(), process())
module.exports.os = os
module.exports.process = process

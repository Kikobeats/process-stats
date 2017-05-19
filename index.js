'use strict'

const _prettyBytes = require('pretty-bytes')
const _prettyMs = require('pretty-ms')
const toobusy = require('toobusy-js')
const os = require('os')

const noop = val => val

function processStats (opts = {}) {
  const {pretty = true} = opts

  const prettyMs = pretty ? _prettyMs : noop
  const prettyBytes = pretty ? _prettyBytes : noop
  const prettyDecimal = pretty ? n => n.toFixed(2) : noop

  const uptime = process.uptime() * 1000
  const memUsed = process.memoryUsage().rss
  const memFree = os.freemem()
  const memTotal = os.totalmem()

  const cpus = os.cpus().length
  const eventLoop = toobusy.lag()

  const load = pretty ? os.loadavg().map(prettyDecimal) : os.loadavg()
  const loadNormalized = load.map(load => prettyDecimal(load / cpus))

  return {
    cpus,
    eventLoop,
    load,
    loadNormalized,
    memFree: prettyBytes(memFree),
    memTotal: prettyBytes(memTotal),
    memUsed: prettyBytes(memUsed),
    pid: process.pid,
    uptime: prettyMs(uptime)
  }
}

module.exports = processStats

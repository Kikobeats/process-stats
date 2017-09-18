'use strict'

const prettyBytes = require('pretty-bytes')
const calcPercent = require('calc-percent')
const prettyMs = require('pretty-ms')
const toobusy = require('toobusy-js')
const os = require('os')

const round = n => Number(n.toFixed(2))

const getStats = () => ({
  uptime: process.uptime() * 1000,
  memUsed: process.memoryUsage().rss,
  memFree: os.freemem(),
  memTotal: os.totalmem(),
  cpus: os.cpus().length,
  eventLoop: toobusy.lag(),
  load: os.loadavg()
})

const processStats = () => {
  const {
    uptime,
    memUsed,
    memFree,
    memTotal,
    cpus,
    eventLoop,
    load: rawLoad
  } = getStats()

  const load = rawLoad.map(round)
  const loadNormalized = load.map(load => round(load / cpus))

  return {
    cpus,
    eventLoop,
    load: {
      value: load,
      normalized: loadNormalized
    },
    memFree: {
      value: memFree,
      pretty: prettyBytes(memFree),
      percent: calcPercent(memFree, memTotal, {suffix: '%'})
    },
    memTotal: {
      value: memTotal,
      pretty: prettyBytes(memTotal),
      percent: calcPercent(memTotal, memTotal, {suffix: '%'})
    },
    memUsed: {
      value: memUsed,
      pretty: prettyBytes(memUsed),
      percent: calcPercent(memUsed, memTotal, {suffix: '%'})
    },
    pid: process.pid,
    uptime: {
      value: uptime,
      pretty: prettyMs(uptime)
    }
  }
}

module.exports = processStats

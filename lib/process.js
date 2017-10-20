'use strict'

const os = require('os')
const {getCpuUsage, getMs, getMemStats} = require('./util')

const EVENT_LOOP_SAMPLING_MS = 1000
const lag = require('event-loop-lag')(EVENT_LOOP_SAMPLING_MS)

module.exports = () => {
  return {
    cpuUsage: getMs(getCpuUsage()),
    uptime: getMs(process.uptime() * 1000),
    memUsed: getMemStats(process.memoryUsage().rss, os.totalmem()),
    delay: getMs(lag())
  }
}

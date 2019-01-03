'use strict'

const os = require('os')
const { getCpuUsage, getMs, getMemStats, top } = require('./util')

module.exports = () => {
  return {
    cpu: getCpuUsage(),
    uptime: getMs(process.uptime() * 1000),
    memUsed: getMemStats(process.memoryUsage().rss, os.totalmem()),
    delay: getMs(top.delay())
  }
}

'use strict'

const os = require('os')
const util = require('./util')

module.exports = top => {
  const { getCpuUsage, getMs, getMemStats } = util(top)

  return {
    cpu: getCpuUsage(),
    uptime: getMs(process.uptime() * 1000),
    memUsed: getMemStats(process.memoryUsage().rss, os.totalmem()),
    delay: getMs(top.delay())
  }
}

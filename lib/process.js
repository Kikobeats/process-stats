'use strict'

const os = require('os')
const {getCpuUsage, getMs, getMemStats} = require('./util')
const toobusy = require('toobusy-js')

module.exports = () => {
  return {
    cpuUsage: getMs(getCpuUsage()),
    uptime: getMs(process.uptime() * 1000),
    memUsed: getMemStats(process.memoryUsage().rss, os.totalmem()),
    delay: getMs(toobusy.lag())
  }
}

'use strict'

const os = require('os')

const {getMemStats, getMs, getLoadAvg} = require('./util')

module.exports = () => {
  const free = os.freemem()
  const total = os.totalmem()
  const cpus = os.cpus().length

  return {
    cpus,
    memFree: getMemStats(free, total),
    memTotal: getMemStats(total, total),
    uptime: getMs(os.uptime()),
    loadAvg: getLoadAvg(os.loadavg(), cpus)
  }
}

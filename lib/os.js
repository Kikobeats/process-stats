'use strict'

const os = require('os')
const util = require('./util')

module.exports = top => {
  const { getLoadAvg, getMs, getMemStats } = util(top)

  const free = os.freemem()
  const total = os.totalmem()
  const cpus = os.cpus().length

  return {
    memFree: getMemStats(free, total),
    memTotal: getMemStats(total, total),
    uptime: getMs(os.uptime()),
    loadAvg: getLoadAvg(os.loadavg(), cpus)
  }
}

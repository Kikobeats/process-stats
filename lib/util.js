'use strict'

const prettyBytes = require('pretty-bytes')
const calcPercent = require('calc-percent')
const prettyMs = require('pretty-ms')

const top = require('process-top')()

const round = n => Number(n.toFixed(2))

const getMemStats = (mem, memTotal) => ({
  value: mem,
  pretty: prettyBytes(mem),
  percent: calcPercent(mem, memTotal, { suffix: '%' })
})

const getMs = time => ({
  value: time,
  pretty: prettyMs(time)
})

const getLoadAvg = (collection, cpus) => {
  const value = collection.map(round)
  return {
    value,
    normalized: value.map(load => round(load / cpus))
  }
}

const getCpuUsage = () => (100 * top.cpu().percent).toFixed(1) + '%'

module.exports = {
  getCpuUsage,
  getMemStats,
  getLoadAvg,
  getMs,
  top
}

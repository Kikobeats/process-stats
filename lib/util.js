'use strict'

const prettyBytes = require('pretty-bytes')
const calcPercent = require('calc-percent')
const prettyMs = require('pretty-ms')

const round = n => Number(n.toFixed(2))

const getMemStats = (mem, memTotal) => ({
  value: mem,
  pretty: prettyBytes(mem),
  percent: Number(calcPercent(mem, memTotal))
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

module.exports = top => {
  const getCpuUsage = () => (100 * top.cpu().percent).toFixed(1) + '%'
  return { getCpuUsage, getMemStats, getLoadAvg, getMs }
}

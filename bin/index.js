#!/usr/bin/env node

'use strict'

const output = require('neat-log/output')
const picocolors = require('picocolors')
const onExit = require('signal-exit')
const neatLog = require('neat-log')
const mri = require('mri')

const stats = require('..')()

onExit(stats.destroy)

const prettyArray = arr => {
  const separator = picocolors.white(', ')
  return `${picocolors.gray(arr.join(separator))}`
}

const prettyPercent = val => {
  const str = `${picocolors.white('(')}${val}%${picocolors.white(')')}`
  return picocolors.gray(str)
}

const style = {
  minimal: () => {
    const { uptime, cpu, delay, loadAvg, memTotal, memUsed } = stats()
    return `${uptime.pretty} | cpu: ${picocolors.gray(cpu.pretty)} | mem: ${picocolors.gray(
      memUsed.pretty
    )} / ${picocolors.gray(memTotal.pretty)} ${prettyPercent(
      memUsed.percent
    )} | delay: ${picocolors.gray(delay.pretty)} | loadavg: ${prettyArray(loadAvg.normalized)}`
  },
  verbose: () => {
    const { uptime, delay, loadAvg, memFree, memTotal, memUsed } = stats()

    return `
    delay          : ${picocolors.gray(delay.pretty)}
    loadAvg        : [${prettyArray(loadAvg.normalized)}]
    memFree        : ${picocolors.gray(memFree.pretty)} ${prettyPercent(memFree.percent)}
    memUsed        : ${picocolors.gray(memUsed.pretty)} ${prettyPercent(memUsed.percent)}
    memTotal       : ${picocolors.gray(memTotal.pretty)} ${prettyPercent(memTotal.percent)}
    uptime         : ${picocolors.gray(uptime.pretty)}`
  }
}

const { _: input, ...flags } = mri(process.argv.slice(2), {
  default: {
    verbose: false
  }
})

const { verbose } = flags

const neat = neatLog(() => output(style[verbose ? 'verbose' : 'minimal']()))

neat.use((state, bus) => {
  setInterval(() => bus.emit('render'), 1000)
  bus.emit('render')
})

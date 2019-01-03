#!/usr/bin/env node

'use strict'

const output = require('neat-log/output')
const neatLog = require('neat-log')
const chalk = require('chalk')

const pkg = require('../package.json')
const stats = require('..')

const prettyArray = arr => {
  const separator = chalk.white(', ')
  return `${chalk.gray(arr.join(separator))}`
}

const prettyPercent = val => {
  const str = `${chalk.white('(')}${val}${chalk.white(')')}`
  return chalk.grey(str)
}

const style = {
  minimal: () => {
    const { uptime, cpu, delay, loadAvg, memTotal, memUsed } = stats()
    return `${uptime.pretty} | cpu: ${chalk.gray(cpu)} | mem: ${chalk.gray(
      memUsed.pretty
    )} / ${chalk.gray(memTotal.pretty)} ${prettyPercent(
      memUsed.percent
    )} | delay: ${chalk.gray(delay.pretty)} | loadavg: ${prettyArray(
      loadAvg.normalized
    )}`
  },
  verbose: () => {
    const { uptime, delay, loadAvg, memFree, memTotal, memUsed } = stats()

    return `
    delay          : ${chalk.gray(delay.pretty)}
    loadAvg        : [${prettyArray(loadAvg.normalized)}]
    memFree        : ${chalk.gray(memFree.pretty)} ${prettyPercent(
  memFree.percent
)}
    memUsed        : ${chalk.gray(memUsed.pretty)} ${prettyPercent(
  memUsed.percent
)}
    memTotal       : ${chalk.gray(memTotal.pretty)} ${prettyPercent(
  memTotal.percent
)}
    uptime         : ${chalk.gray(uptime.pretty)}`
  }
}

const cli = require('meow')({
  pkg,
  flags: {
    verbose: {
      type: 'boolean',
      default: false
    }
  }
})

const { verbose } = cli.flags

const neat = neatLog(() => output(style[verbose ? 'verbose' : 'minimal']()))

neat.use((state, bus) => {
  setInterval(() => bus.emit('render'), 1000)
  bus.emit('render')
})

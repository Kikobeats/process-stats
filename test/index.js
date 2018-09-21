'use strict'

const chalk = require('chalk')

const { os, process } = require('..')

const stats = Object.assign({}, os(), process())

const {
  cpuUsage,
  delay,
  loadAvg,
  memFree,
  memTotal,
  memUsed,
  uptime
} = stats

const prettyArray = arr => {
  const separator = chalk.white(', ')
  return `[${chalk.gray(arr.join(separator))}]`
}

const prettyPercent = val => {
  const str = `${chalk.white('(')}${val}${chalk.white(')')}`
  return chalk.grey(str)
}

console.log(`delay          : ${chalk.gray(delay.pretty)}`)
console.log(`loadAvg        : ${prettyArray(loadAvg.normalized)}`)
console.log(`memFree        : ${chalk.gray(memFree.pretty)} ${prettyPercent(memFree.percent)}`)
console.log(`memUsed        : ${chalk.gray(memUsed.pretty)} ${prettyPercent(memUsed.percent)}`)
console.log(`memTotal       : ${chalk.gray(memTotal.pretty)} ${prettyPercent(memTotal.percent)}`)
console.log(`uptime         : ${chalk.gray(uptime.pretty)}`)
console.log(`cpuUsage       : ${chalk.gray(cpuUsage.pretty)}`)

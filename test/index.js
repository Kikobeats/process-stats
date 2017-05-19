'use strict'

const stats = require('..')
const chalk = require('chalk')

const {
  cpus,
  eventLoop,
  load,
  loadNormalized,
  memFree,
  memTotal,
  memUsed,
  pid,
  uptime
} = stats()

const prettyArray = arr => {
  const separator = chalk.white(', ')
  return `[${chalk.gray(arr.join(separator))}]`
}

const prettyPercent = val => {
  const str = `${chalk.white('(')}${val}${chalk.white(')')}`
  return chalk.grey(str)
}

console.log(`cpus           : ${chalk.gray(cpus)}`)
console.log(`eventLoop      : ${chalk.gray(eventLoop)}`)
console.log(`load           : ${prettyArray(load)}`)
console.log(`loadNormalized : ${prettyArray(loadNormalized)}`)
console.log(`memFree        : ${chalk.gray(memFree.value)} ${prettyPercent(memFree.percent)}`)
console.log(`memUsed        : ${chalk.gray(memUsed.value)} ${prettyPercent(memUsed.percent)}`)
console.log(`memTotal       : ${chalk.gray(memTotal.value)} ${prettyPercent(memTotal.percent)}`)
console.log(`pid            : ${chalk.gray(pid)}`)
console.log(`uptime         : ${chalk.gray(uptime)}`)

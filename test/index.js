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

console.log(`cpus           : ${chalk.gray(cpus)}`)
console.log(`eventLoop      : ${chalk.gray(eventLoop)}`)
console.log(`load           : ${prettyArray(load)}`)
console.log(`loadNormalized : ${prettyArray(loadNormalized)}`)
console.log(`memFree        : ${chalk.gray(memFree)}`)
console.log(`memTotal       : ${chalk.gray(memTotal)}`)
console.log(`memUsed        : ${chalk.gray(memUsed)}`)
console.log(`pid            : ${chalk.gray(pid)}`)
console.log(`uptime         : ${chalk.gray(uptime)}`)

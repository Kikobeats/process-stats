# process-stats

<p align="center">
  <br>
  <img src="demo.gif" alt="process-stats">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/process-stats.svg?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/process-stats.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/process-stats)
[![NPM Status](https://img.shields.io/npm/dm/process-stats.svg?style=flat-square)](https://www.npmjs.org/package/process-stats)

> Display dynamic real-time information about running Node.js process.

## Install

### as package

```bash
$ npm install process-stats --save
```

### as CLI

```bash
$ npm install process-stats --global
```

or

```bash
$ npx process-stats
```

## Usage

```js
const procStats = require('process-stats')()

// print collector stats
console.log(procStats())

// destroy collector
console.log(procStats.destroy())
```

## Related

- [pidusage](https://github.com/soyuka/pidusage): Cross-platform process cpu % and memory usage of a PID.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).

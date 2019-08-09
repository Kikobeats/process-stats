# process-stats

<p align="center">
  <br>
  <img src="demo.gif" alt="process-stats">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/process-stats.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/process-stats/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/process-stats)
[![Dependency status](https://img.shields.io/david/Kikobeats/process-stats.svg?style=flat-square)](https://david-dm.org/Kikobeats/process-stats)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/process-stats.svg?style=flat-square)](https://david-dm.org/Kikobeats/process-stats#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/process-stats.svg?style=flat-square)](https://www.npmjs.org/package/process-stats)

> Human readable stats for your Node.js process.

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
const procStats = require('process-stats')

console.log(procStats())
```

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).

# process-stats

<p align="center">
  <br>
  <img src="demo.png" alt="process-stats">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/process-stats.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/process-stats/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/process-stats)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/process-stats.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/process-stats)
[![Dependency status](https://img.shields.io/david/Kikobeats/process-stats.svg?style=flat-square)](https://david-dm.org/Kikobeats/process-stats)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/process-stats.svg?style=flat-square)](https://david-dm.org/Kikobeats/process-stats#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/process-stats.svg?style=flat-square)](https://www.npmjs.org/package/process-stats)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Resume stats for your process

## Install

```bash
$ npm install process-stats --save
```

## Usage

```js
const procStats = require('process-stats')

console.log(procStats())
```

## API

### procStats([options])

#### options

##### pretty

Type: `boolean`<br>
Default: `true`

Print pretty units per each stat. Set `false` for get the raw value.

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).

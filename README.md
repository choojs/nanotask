# nanotask [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Microtask queue scheduler for the browser.

The microtask queue is a set of tasks that runs at the end of the current frame
in the browser, before recalculating style and painting. This is analogous to
`process.nextTick()` in Node. There's no direct API for the microtask queue in
the browser, but using `Promise.resolve()` we can trick the browser into running
functions as part of the microtask queue. This is useful to create tight, 60fps
loops in the main browser thread.

## Usage
```js
var nanotask = require('nanotask')

nanotask(() => {
  console.log('resolved at the start of the next frame')
})
```

## API
### `nanotask(fn)`
Queue a function on the browser's microtask queue.

## Installation
```sh
$ npm i nanotask
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanotask.svg?style=flat-square
[3]: https://npmjs.org/package/nanotask
[4]: https://img.shields.io/travis/yoshuawuyts/nanotask/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/nanotask
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/nanotask/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/nanotask
[8]: http://img.shields.io/npm/dm/nanotask.svg?style=flat-square
[9]: https://npmjs.org/package/nanotask
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard

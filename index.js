module.exports = nanotask

function nanotask (cb) {
  Promise.resolve().then(cb)
}

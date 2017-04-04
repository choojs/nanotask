module.exports = nanotask

function nanotask () {
  if (!document.MutationObserver) {
    return function (cb) {
      window.requestAnimationFrame(cb, 0)
    }
  }

  var node = document.createTextNode('')
  var queue = []
  var i = 0

  new document.MutationObserver(function () {
    for (var i = 0; i < queue.length; i++) queue[i]()
    queue = []
  }).observe(node, { characterData: true })

  return function (fn) {
    queue.push(fn)
    node.data = i++
  }
}

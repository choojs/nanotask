module.exports = nanotask

function nanotask () {
  var node = document.createTextNode('')
  var queue = []
  var i = 0

  new window.MutationObserver(function () {
    while (queue.length) queue.shift()()
  }).observe(node, { characterData: true })

  return function (fn) {
    queue.push(fn)
    node.data = (i = 1 - i)
  }
}

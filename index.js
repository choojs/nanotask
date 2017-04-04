module.exports = nanotask

function nanotask () {
  var node = document.createTextNode('')
  var queue = []
  var i = 0

  new window.MutationObserver(function () {
    for (var i = 0; i < queue.length; i++) queue[i]()
    queue = []
  }).observe(node, { characterData: true })

  return function (fn) {
    queue.push(fn)
    node.data = (i = ++i % 2)
  }
}

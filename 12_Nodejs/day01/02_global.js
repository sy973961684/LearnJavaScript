global.console.log(__filename)
global.console.log(__dirname)

console.log(__filename)
console.log(__dirname)

global.setTimeout(function () {
  console.log('123')
}, 1000)

setTimeout(function () {
  console.log(456)
}, 1000)
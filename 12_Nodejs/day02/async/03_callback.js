function getData (callback) {
  callback(123)
}

getData(function (n) {
  console.log(n)
})
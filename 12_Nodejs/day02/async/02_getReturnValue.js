const { get } = require("http")

function getMsg (callback) {
  setInterval(function () {
    callback({
      msg: "hello node.js"
    })
  }, 2000)
}

getMsg(function (data) {
  console.log(data)
})
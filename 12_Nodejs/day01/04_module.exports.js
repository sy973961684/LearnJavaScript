const greeting = name => `hello ${name}`
const x = 100
exports.x = x

// 当exports对象和module.exports指向的不是同一个对象时,以module.exports为准
exports = {
  name: 'exports'
}
module.exports = {
  name: 'module.exports'
}
// 如果想要greeting方法被外部文件访问,需要写到下下面
module.exports.greeting = greeting

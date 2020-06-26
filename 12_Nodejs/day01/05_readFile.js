// 1. 引入fs模块
const fs = require('fs')

// 2. 通过模块readFile函数读取文件内容
fs.readFile('./01_helloworld.js', 'utf8', (err, doc) => {
  // 如果文件读取出错,err是一个对象包含错误信息
  // 如果文件读取正确,err是null
  // doc是文件读取的结果
  console.log(err.path)
  console.log(doc)
})
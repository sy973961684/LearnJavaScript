// 引入express框架
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  // send()
  // 1. send方法内部会检测响应内容的类型
  // 2. send方法会自动设置http状态码
  // 3. send方法会帮助我们自动设置响应内容类型及编码
  res.send('Hello Express')
})

app.listen(3000)
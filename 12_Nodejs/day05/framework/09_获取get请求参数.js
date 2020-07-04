// 引入express框架
const express = require('express')
// 创建网站服务器
const app = express()

app.get('/index', (req, res) => {
  // 获取get请求参数
  res.send(req.query)
})

app.listen(3000)
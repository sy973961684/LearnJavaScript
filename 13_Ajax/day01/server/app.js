// 引入express框架
const express = require('express')
// 路径处理模块
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
// 创建web服务器
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 创建静态访问服务功能
app.use(express.static(path.join(__dirname, 'public')))

// 01 html
app.get('/first', (req, res) => {
  res.send('Hello Ajax')
})

// 02 html
app.get('/responseData', (req, res) => {
  res.send({
    "name": 'zhangsan'
  })
})

// 03 html
app.get('/get', (req, res) => {
  res.send(req.query)
})

// 04.html
app.post('/post', (req, res) => {
  res.send(req.body)
})

// 05.html
app.post('/json', (req, res) => {
  res.send(req.body)
})

// 06.html
app.get('/readystate', (req, res) => {
  res.send('ok')
})

// 07.html
app.get('/error', (req, res) => {
  // console.log(abc) // 模拟500 服务器端错误
  res.status(400).send("not ok")
})

// 08.html
app.get('/cache', (req, res) => {
  fs.readFile('./test.txt', (err, result) => {
    res.send(result)
  })
})

app.listen(3000)
console.log('服务器启动成功')
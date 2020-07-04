const express = require('express')
const fs = require('fs')
const app = express()

app.get('/index', (req, res, next) => {
  // throw new Error('程序发生了未知错误')
  fs.readFile('./01.js', 'utf8', (err, result) => {
    if (err != null) {
      next(err)
    } else {
      res.send(result)
    }
  })

  // res.send('程序正常运行')
})

// 错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})
app.listen(3000)
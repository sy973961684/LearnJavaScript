const express = require('express')
const app = express()

app.get('/request', (req, res, next) => {
  req.name = 'sz'
  next()
})

app.get('/request', (req, res) => {
  res.send(req.name)
})

app.listen(3000)
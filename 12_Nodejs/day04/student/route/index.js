// 引入router模块
const getRouter = require('router')
// 获取路由对象
const router = getRouter()
// 学生信息集合
const Student = require('../model/user')
const template = require('art-template')
const queryString = require('querystring')

router.get('/add', (req, res) => {
  let html = template('index.art', {})
  res.end(html)
})

router.get('/list', async (req, res) => {
  let students = await Student.find()
  console.log(students)
  let html = template('list.art', {
    students: students
  })
  res.end(html)
})

router.post('/add', (req, res) => {
  let formData = ''
  req.on('data', param => {
    formData += param
  })
  console.log(formData)
  req.on('end', async () => {
    await Student.create(queryString.parse(formData))
    res.writeHead(301, {
      Location: 'list'
    })
    res.end()
  })
})

module.exports = router
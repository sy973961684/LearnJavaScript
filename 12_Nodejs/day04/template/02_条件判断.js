const template = require('art-template')
const path = require('path')

const views = path.join(__dirname, 'views', '02.art')

const html = template(views, {
  name: 'sy',
  age: 19
})

console.log(html)
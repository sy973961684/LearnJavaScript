const template = require('art-template')
const path = require('path')
const dateFormat = require('dateFormat')
const { copyFileSync } = require('fs')

template.defaults.root = path.join(__dirname, 'views')

template.defaults.imports.dateFormat = dateFormat

template.defaults.extname = '.html'

const html = template('06.art', {
  time: new Date()
})

console.log(template('07', { name: 'sy' }))
console.log(html)
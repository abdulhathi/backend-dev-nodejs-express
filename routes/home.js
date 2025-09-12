const express = require('express')

const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
  res.render('index', { title: 'AbdulsNodeJS_Practice', message: 'Hi How are you ?' })
})

module.exports = homeRouter
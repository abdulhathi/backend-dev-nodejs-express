const express = require('express')
const z = require('zod')
const logger = require('./middlewares/logger')
const morgan = require('morgan')
const config = require('config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)

// console.log(process.env.NODE_ENV)
const app_name = config.get('app_name')
console.log(app_name)

if (app.get('env') === 'development') {
  app.use(morgan('tiny'))
  console.log(config.get('Customer.dbConfig'))
}
if (app.get('env') === 'production') console.log(config.get('Customer.dbConfig'))

app.listen(3021, () => console.log('Listening port 3021'))

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/api/courses', (req, res) => {
  res.json([1, 2, 3, 4, 5])
})

app.listen(3010, () => console.log('Listening port 3010...'))

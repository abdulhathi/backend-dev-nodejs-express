const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/api/courses', (req, res) => {
  res.json([1, 2, 3, 4, 5])
})

// ^ path params or route params
app.get('/api/courses/:id/:name', (req, res) => {
  res.send(req.params)
})
// ^ query params
app.get('/api/courses/:id', (req, res) => {
  res.send(req.query)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening port ${port}...`))

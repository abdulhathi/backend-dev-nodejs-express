const express = require('express')
const z = require('zod')
const logger = require('../middlewares/logger')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)

console.log(process.env.NODE_ENV)
if (app.get('env') === 'development') app.use(morgan('tiny'))

const courses = [
  { id: 1, name: 'Asp.net' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'React' },
]

//^ Get All courses
app.get('/api/courses', (req, res) => {
  res.send(courses)
})

//^ Get Course by Id
app.get('/api/courses/:id', (req, res) => {
  console.log(req.params.id)

  const course = courses.find((course) => course.id === parseInt(req.params.id))

  if (!course) return res.status(404).send('The Course with the given id was not found.')

  res.send(course)
})

const validateCourse = (course) => {
  const schema = z.object({
    name: z.string().trim().min(3, 'Name should be min 3 chars.'),
  })
  return schema.safeParse(course)
}

//^ POST a course
app.post('/api/courses/', (req, res) => {
  const result = validateCourse(req.body)

  if (!result.success) return res.status(400).send(result.error.format())

  const course = { id: courses.length + 1, name: req.body.name }
  courses.push(course)
  res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id))
  if (!course) return res.status(404).send('The Course with the given id was not found.')

  const result = validateCourse(req.body)
  if (!result.success) return res.status(400).send(result.error.format())

  course.name = req.body.name
  res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id))
  if (!course) return res.status(404).send('The Course with the given id was not found.')

  const courseIndex = courses.findIndex((c) => c === course)
  courses.splice(courseIndex, 1)
  res.send(course)
})

app.listen(3021, () => console.log('Listening port 3021'))

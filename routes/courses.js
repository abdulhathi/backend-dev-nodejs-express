const express = require('express')

const courseRoute = express.Router()

const courses = [
  { id: 1, name: 'Asp.net' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'React' },
]

//^ Get All courses
courseRoute.get('', (req, res) => {
  res.send(courses)
})

//^ Get Course by Id
courseRoute.get('/:id', (req, res) => {
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
courseRoute.post('/', (req, res) => {
  const result = validateCourse(req.body)

  if (!result.success) return res.status(400).send(result.error.format())

  const course = { id: courses.length + 1, name: req.body.name }
  courses.push(course)
  res.send(course)
})

courseRoute.put('/:id', (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id))
  if (!course) return res.status(404).send('The Course with the given id was not found.')

  const result = validateCourse(req.body)
  if (!result.success) return res.status(400).send(result.error.format())

  course.name = req.body.name
  res.send(course)
})

courseRoute.delete('/:id', (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id))
  if (!course) return res.status(404).send('The Course with the given id was not found.')

  const courseIndex = courses.findIndex((c) => c === course)
  courses.splice(courseIndex, 1)
  res.send(course)
})

module.exports = courseRoute

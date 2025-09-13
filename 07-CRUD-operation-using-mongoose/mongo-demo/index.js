const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/playground')
  .then(() => console.log('Mongodb connected'))
  .catch((err) => console.log(err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
  const course = new Course({
    name: 'AI Course',
    author: 'Abdul',
    tags: ['DotNet', 'c#'],
    isPublished: false,
  })

  const result = await course.save()
  console.log(result)
}

// createCourse()

async function getCourses() {
  const courses = await Course.find({ author: 'Abdul', isPublished: false })
    .limit(1)
    .select({ name: 1 })
    .sort({ name: 1 })
  console.log(courses)
}

getCourses()

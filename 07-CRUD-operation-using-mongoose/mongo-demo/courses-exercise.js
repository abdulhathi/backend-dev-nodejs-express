const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('mongo-exercises DB connected'))
  .catch((err) => console.log(err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
})

const Course = mongoose.model('courses', courseSchema)

async function getCourses() {
  const courses = await Course.find({ isPublished: true, tags: 'backend' })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 })
  console.log(courses)
}

getCourses()

async function getCourses1() {
  const courses = await Course.find({ isPublished: true, tags: { $in: ['backend', 'frontend'] } })
    .sort({ price: -1 })
    .select({ name: 1, author: 1 })
  console.log(courses)
}

// getCourses1()

// * Get all the published courses that are $15 or more, or have the word 'by' in their title.

async function getCourses2() {
  const courses = await Course.find({ isPublished: true }).or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
  console.log(courses)
}

// getCourses2()

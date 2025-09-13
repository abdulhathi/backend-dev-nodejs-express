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

module.exports = Course

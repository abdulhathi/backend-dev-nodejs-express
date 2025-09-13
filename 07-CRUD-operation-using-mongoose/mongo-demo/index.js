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
// getCourses()

/* 
  * Comparison operators
  ^ eq      (equal)
  ^ neq     (not equal)
  ^ lt      (less than)
  ^ lte     (less than or equal)
  ^ gt      (greater than)
  ^ gte     (greater than or equal)
  ^ in      (in)
  ^ nin     (not in)
*/

async function queryCoursesByComparision() {
  const courses = await Course.find({
    tags: { $in: 'c#' },
  })
  console.log(courses)
}
// queryCoursesByComparision()

/* 
  * Logical operators
  ^ or      (or)
  ^ and      (or)
*/

async function queryCoursesByLogicalOR() {
  const courses = await Course.find()
    .or([{ name: 'Abdul' }, { isPublished: true }])
    .select({ name: 1, isPublished: 1 })
  console.log(courses)
}
// queryCoursesByLogicalOR()

async function queryCoursesByLogicalAND() {
  const courses = await Course.find()
    .and([{ name: 'Abdul' }, { isPublished: true }])
    .select({ name: 1, isPublished: 1 })
  console.log(courses)
}
// queryCoursesByLogicalAND()

/* 
  * Regular expression
  ^ /^[pattern]/      (starts with)
  ^ /[pattern]$/      (ends with)
  ^ /[pattern]$/i      (ends with ignore case)
*/
//  /.*[pattern].*/      (contains)

// * Counting
// ^ .count

async function countCourses() {
  const courseCount = await Course.countDocuments()
  console.log(courseCount)
}
// countCourses()

/* 
  * Pagination
  ^ .skip(number).limit(number_items)
*/

async function getCoursesByPageNumber(pageNumber, pageSize) {
  const courses = await Course.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
  console.log(courses)
}
getCoursesByPageNumber(2,2)
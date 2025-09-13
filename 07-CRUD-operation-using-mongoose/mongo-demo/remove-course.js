const Course = require('./courses')

async function deletCourseById(id) {
  const res = await Course.deleteOne({ _id: id })
  console.log(res)
}
deletCourseById('68c5acb467caa42e54ae4cbb')

async function removeCourse(id) {
  const res = await Course.findByIdAndDelete({ _id: id })
  console.log(res)
}
removeCourse('68c5acb467caa42e54ae4cbb')
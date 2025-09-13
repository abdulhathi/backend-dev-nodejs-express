const Course = require('./courses')

async function updateQueryFirstById(id) {
  const course = await Course.findById(id)
  if (!course) return
  course.author = 'Abdul Hathi1'
  course.isPublished = true
  const res = await course.save()
  console.log(res)
}

updateQueryFirstById('68c4fe4577c33f74dcf5d3b2')

// * Update first method
async function updateCourseById(name) {
  await Course.findOneAndUpdate(
    { name: name },
    {
      $set: {
        author: 'Haji1',
        isPublished: false,
      },
    }
  )
  const updatedCourse = await Course.findOneAndUpdate({ name: name })
  console.log(updatedCourse)
}

// updateCourseById('Node.JS Course')

const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/playground')
  .then(() => console.log('Mongodb connected'))
  .catch((err) => console.log(err))

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'network'],
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: async function (v) {
        setTimeout(() => {
          return v && v.length > 0
        }, 2000)
      },
      message: 'A course should have atleas one tag',
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    set: (v) => Math.round(v),
    get: (v) => Math.round(v),
  },
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
  const course = new Course({
    name: 'Design pattern',
    category: 'web',
    author: 'Haji',
    tags: [],
    isPublished: true,
    price: 15.8,
  })
  try {
    await course.save()
  } catch (error) {
    console.log(error.message)
  }
}

Course.find({ _id: '68c627950427938642c013ee' }).then((res) => console.log(res))
// createCourse()

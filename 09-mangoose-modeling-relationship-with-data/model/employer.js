const mongoose = require('mongoose')

const Employer = mongoose.model(
  'employer',
  new mongoose.Schema({
    name: String,
    salary: Number,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  })
)

module.exports = Employer

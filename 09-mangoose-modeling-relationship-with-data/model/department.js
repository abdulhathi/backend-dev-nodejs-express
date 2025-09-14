const mongoose = require('mongoose')

const Department = mongoose.model(
  'department',
  new mongoose.Schema({
    name: String,
  })
)

module.exports = Department

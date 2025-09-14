const mongoose = require('mongoose')
const Employer = require('./model/employer')
const Department = require('./model/department')

mongoose
  .connect('mongodb://localhost/employee')
  .then((res) => console.log('employee db connected'))
  .catch((err) => console.log(err))


async function populatingEmployer() {
  const employer = await Employer.findOne().populate('department')
  console.log(employer)
}

populatingEmployer()

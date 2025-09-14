const mongoose = require('mongoose')
const Department = require('./model/department')
const Employer = require('./model/employer')

mongoose
  .connect('mongodb://localhost/employee')
  .then((res) => console.log('employee db connected'))
  .catch((err) => console.log(err))

// const Department = mongoose.model(
//   'department',
//   new mongoose.Schema({
//     name: String,
//   })
// )

// const Employer = mongoose.model(
//   'employer',
//   new mongoose.Schema({
//     name: String,
//     salary: Number,
//     department: { type: mongoose.Schema.Types.ObjectId, ref: 'department' },
//   })
// )

async function createDepartment(name) {
  const department1 = new Department({
    name,
  })
  const res = await department1.save()
  console.log(res)
}

async function getDepartmentIds() {
  return await Department.find().select({ _id: 1 })
}

async function createEmployer(name, salary, deptId) {
  const employer1 = Employer({
    name,
    salary,
    department: deptId,
  })
  const res = await employer1.save()
  console.log(res)
}

// const departments = ['Finance', 'Network', 'IT', 'HR']
// for (const department of departments) createDepartment(department)

// getDepartmentIds().then((res) => {
//   for (const [index, department] of res.entries()) {
//     console.log(department, index)
//     createEmployer(`Abdul_${index}`, 100000 * (index + 1), department)
//   }
// })

async function populatingEmployer() {
  const employer = await Employer.find().select('name salary department').populate('department')
  console.log(employer)
}

populatingEmployer()

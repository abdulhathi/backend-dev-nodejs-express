const mongoose = require('mongoose')
const Employer = require('./model/employer')
const Department = require('./model/department')

mongoose
  .connect('mongodb://localhost/employee')
  .then((res) => console.log('employee db connected'))
  .catch((err) => console.log(err))

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
  // const department1 = await getDepartment(deptName)
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

getDepartmentIds().then((res) => {
  for (const [index, department] of res.entries()) {
    console.log(department, index)
    createEmployer(`Abdul_${index}`, 100000 * (index + 1), department)
  }
})

//   createEmployer(`Abdul_${index}`, 100000 * (index + 1), department)
// console.log(department, index)

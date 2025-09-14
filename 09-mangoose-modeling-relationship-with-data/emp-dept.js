const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb");

const employerSchema = new mongoose.Schema({ name: String });
const departmentSchema = new mongoose.Schema({
  name: String,
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "Employer" }
});

const Employer = mongoose.model("Employer", employerSchema);
const Department = mongoose.model("Department", departmentSchema);

 const printDepts = async () => {
  // const employer = await Employer.create({ name: "Acme" });
  // await Department.create({ name: "IT", employer: employer._id });

  const depts = await Department.find().populate("employer");
  console.log(depts);
};

printDepts()
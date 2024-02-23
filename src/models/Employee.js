// src/app/models/Employee.js
import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String},// required: true 
  photo: { type: String }
});


const Employee =
  mongoose.models.Employee ?? mongoose.model("Employee", employeeSchema);

export default Employee;

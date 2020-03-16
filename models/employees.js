const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  //company
  companyID: {
    type: Number,
    required: true
  },
  //name
  name: {
    type: String,
    required: true
  },
  //email
  email: {
    type: String,
    required: true
  },
  //department
  department: {
    type: String,
    required: true
  },
  //birthday - date
  birthday: {
    type: Date,
    default: "1980-01-01T06:01:17.171Z"
  },
  //date hired - date
  hired: {
    type: Date,
    default: "2000-01-01T06:01:17.171Z"
  },
  //holidays - array
  holidays: {
    type: Array,
    default: []
  },
  //favoriteSnacks - array
  snacks: {
    type: Array,
    default: []
  },
  //coffeeOrder
  coffee: {
    type: String,
    default: ""
  },
  //dietaryRestrictions - array
  dietaryRestrictions: {
    type: Array,
    default: []
  },
  //want to hang out
  down: {
    type: Boolean,
    default: true
  }
});

const Employees = mongoose.model("Employees", employeeSchema);

module.exports = Employees;
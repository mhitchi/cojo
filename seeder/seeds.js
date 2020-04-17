const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cojo");

const seed = [
  {
    companyID: 123456,
    name: "Meg",
    email: "mbsutter4@gmail.com",
    department: "HR",
    birthday: "1995-05-20T06:01:17.171Z",
    hired: "2020-03-16T06:01:17.171Z",
    holidays: ["Valentines Day","Easter","Halloween","Thanksgiving","Christmas"],
    snacks: ["Baby Carrots", "Chocolate"],
    coffee: "black",
    dietaryRestrictions: "gluten",
    down: true
  },
  {
    companyID: 123456,
    name: "Lane",
    email: "lsmith@uga.edu",
    department: "Communications",
    birthday: "1993-05-07T06:01:17.171Z",
    hired: "2020-03-16T06:01:17.171Z",
    holidays: ["Valentines Day","Easter","Halloween","Thanksgiving","Christmas"],
    snacks: ["Chickpea wraps", "Twin Snakes"],
    coffee: "sugar and cream",
    down: false
  }
]

db.Employees.remove({})
  .then(() => db.Employees.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

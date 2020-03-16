const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cojo");

const seed = [
  {
    empID: 1,
    name: "Meg",
    department: "HR",
    birthday: "1995-05-20T06:01:17.171Z",
    hired: "2020-03-16T06:01:17.171Z",
    holidays: ["Valentines Day","Easter","Halloween","Thanksgiving","Christmas"],
    favoriteSnacks: ["Baby Carrots", "Chocolate"],
    coffeeOrder: "black",
    dietaryRestrictions: "gluten"
  },
  {
    empID: 2,
    name: "Lane",
    department: "Communications",
    birthday: "1993-05-07T06:01:17.171Z",
    hired: "2020-03-16T06:01:17.171Z",
    holidays: ["Valentines Day","Easter","Halloween","Thanksgiving","Christmas"],
    favoriteSnacks: ["Chickpea wraps", "Twin Snakes"],
    coffeeOrder: "sugar and cream"
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
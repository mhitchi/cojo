const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cojo");

const seed = [
  {
    empID: 1,
    name: "Meg",
    department: "HR",
    birthday: "05/20/1995",
    hired: "03/16/2020",
    holidays: ["Valentines Day","Easter","Halloween","Thanksgiving","Christmas"],
    favoriteSnacks: ["Baby Carrots", "Chocolate"],
    coffeeOrder: "black",
    dietaryRestrictions: "gluten"
  },
  {
    empID: 2,
    name: "Lane",
    department: "Communications",
    birthday: "05/07/1993",
    hired: "03/16/2020",
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
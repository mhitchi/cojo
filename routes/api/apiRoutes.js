const router = require("express").Router();
const db = require("../../models");

//get route for fetching all employees for that company
router.get("/api/employees/:coID", (req, res) => {
  db.Employees.find({ coID: req.params.coID })
    .then(employees => res.json(employees))
    .catch(err => res.status(422).end());
});

//get route for user's profile page

//post route for making a new user

//put route for editing user's profile page

//get route for another employee's profile page

//get route for events?
router.get("/api/events/:companyID", (req, res) => {
  console.log(req.params.companyID);
  db.Events.find({ companyID: req.params.companyID })
    .then(events => res.json(events))
    .catch(err => res.status(422).end());
});

//put route for calendar?

//post route for dates?

//post route for feedback

//put route to add image to employee
router.put("/employees/:id", (req, res) => {
  console.log("request body for put: ", req.body);
  db.Employees.findOneAndUpdate(
    { employeeID: req.params.id },
    {
      //TODO remove hard coding
      employeeImg: req.file.path
    }
  )
  .then(response => console.log("response for put: ", response))
  .catch(err => console.log("error for put: ", err))
  res.send("complete");
});

module.exports = router;
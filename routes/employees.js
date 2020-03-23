const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
// https://www.youtube.com/watch?v=srPXMt1Q0nY file uploading tutorial

//storage strategy
const storage = multer.diskStorage({
  //access to request, file, and callback
  destination: function(req, file, cb) {
    //callback args= errors and path
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

//create file filters
const fileFilter = (req, file, cb) => {
  //conditional file saving
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    //accept file
  cb(null, true);
  } else {
    cb(new Error("please select a jpg or png file"), false);
  }
};

//initialize multer, declare destination for uploaded files, limit file size to 5MB, filter file types
const upload = multer({storage: storage, limits: {
 fileSize: 1024 * 1024 * 5 
}, fileFilter: fileFilter
});

const Employees = require("../models/employees");

router.post("/", upload.single('employeeImg'), (req, res) => {
  console.log(req.file);
  const employee = new Employees({
    _id: new mongoose.Types.ObjectId(),
    // TODO remove hard coding
    companyID: 1,
    name: "Voltron",
    email: "voltron@voltron.com",
    department: "mysteries",
    employeeImg: req.file.path
  })
})
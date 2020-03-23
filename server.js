const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const multer = require("multer");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

//define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cojo", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

//use apiRoutes
app.use("/api", apiRoutes);

const employeeRoutes = require("./routes/employees");

//send every request to the React app
//define any API routes before this runs

// if (process.env.NODE_ENV === "production") {
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
// } else {
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
//   });
// }

// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path
//We have to hold the file temporarily before we send it to the REST API so that we can provide a full path to the files.
//also generate unique file names
const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// express route where we receive files from the client
// passing multer middleware
//When the route receives a file, it goes through the middleware first and is stored in our /files directory with a newly generated file name. When we get to the callback, the file is available as part of the req object.
app.post('/files', upload.single('file'), (req, res) => {
 const file = req.file; // file passed from client
 const meta = req.body; // all other values passed from the client, like name, etc..
 
 // send the data to our REST API
 axios({
    url: `https://api.myrest.com/uploads`,
    method: 'post',
    data: {
      file,
      name: meta.name,      
    },
  })
   .then(response => res.status(200).json(response.data.data))
   .catch((error) => res.status(500).json(error.response.data));
});

//app listening
app.listen(PORT, function() {
  console.log(`==> API server now on port ${PORT}!`);
});
//https://www.youtube.com/watch?v=e-gb9IBfSw8 tutorial for file uploading with AWS, multer, MERN
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const router = express.Router();
const app = express();
const apiRoutes = require("./routes/api/apiRoutes");

require('dotenv').config();

//define middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//export router so server.js file can pick it up
module.exports = router;

//image upload
const profile = require('./routes/api/profile');
app.use('/api/profile', profile);

//serve up static assets
if ( process.env.NODE_ENV === 'production' ) {
	// Set a static folder
	app.use( express.static( 'client/build' ) );
	app.get( '*', ( req, res ) => res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) ) );
}

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cojo", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

//use apiRoutes
app.use("/api", apiRoutes);

const employeeRoutes = require("./routes/api/profile");

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


//app listening
app.listen(PORT, function() {
  console.log(`==> API server now on port ${PORT}!`);
});

module.exports = app;
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

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

//send every request to the React app
//define any API routes before this runs

if (process.env.NODE_ENV === "production") {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

//app listening
app.listen(PORT, function() {
  console.log(`==> API server now on port ${PORT}!`);
});
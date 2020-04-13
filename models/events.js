const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  companyID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  location: {
    type: String,
    default: ""
  },
  attendees: {
    type: Number,
    default: 0
  }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
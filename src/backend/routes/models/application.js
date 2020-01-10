const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ApplicationSchema = new Schema({
  totalAmount: {
    type: Number,
    required: true
  },
  monthlyInstalement: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  usermail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  
});

module.exports = Application = mongoose.model("application", ApplicationSchema);

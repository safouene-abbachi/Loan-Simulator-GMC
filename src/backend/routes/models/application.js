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
  }
});

module.exports = Application = mongoose.model("application", ApplicationSchema);

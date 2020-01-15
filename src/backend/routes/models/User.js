const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  bankname: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Client Schema

const ClientsSchema = new Schema({
  user: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },

  rôle: {
    type: String
  }
});

module.exports = Clients = mongoose.model("user", ClientsSchema);

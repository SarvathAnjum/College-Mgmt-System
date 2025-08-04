const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  roles: {
    type: Number,
    required: true, // optional if role is mandatory
    enum: [1, 2], // restricts to allowed role values
    default: 2, // default to 'User' role
  },
});
module.exports = mongoose.model("Students-Users", userSchema);

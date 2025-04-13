const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // plaintext for simplicity
});
module.exports = mongoose.model("User", UserSchema);

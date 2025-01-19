const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  "email":String,
  "nom":String,
  "prenom":String,
  "phone":String,
  "age":Number
})

const User = mongoose.model("users",UserSchema)

module.exports = User
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  "cin":String,
  "nom":String,
  "nom":String,
  "age":Number
})

const User = mongoose.model("users",UserSchema)

module.exports = User
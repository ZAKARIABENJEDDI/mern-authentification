const express = require("express")
const User = require("../models/user")
const routes = express.Router()

routes.post('/add', async(req,res)=>{
  const {email,password,confirmPassword,firstName,lastName,phone,age} = req.body
  const NewUser = new User()
  NewUser.email = email
  NewUser.nom = lastName
  NewUser.prenom = firstName
  NewUser.phone = phone
  NewUser.age = age
  await NewUser.save()
  console.log("test work")
  res.json({ message: "test is work" ,"data":req.body});
})

routes.get('/read', async (req,res) => {
  const AllUsers = await User.find()
  res.send(AllUsers)
})

module.exports = routes
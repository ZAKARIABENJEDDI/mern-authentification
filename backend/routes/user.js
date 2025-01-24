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


routes.get('/find', async (req,res) => {
  const {id} = req.body
  try {
    const SpecificUser = await User.findById(id)
    res.send(SpecificUser)
    return
  } catch (error) {
    res.send(error)
  }
})

routes.post('/addUser', async (req,res) => {
  const {email ,password} = req.body
  try {
    const FindUser = await User.findOne({email,password})
    if (FindUser) {
      res.json({message:"User Alredy Exist Entrer Le code Envoyer",code:'0000'})
      return
    }else{
      try {
        const newUser = new User()
        newUser.email = email
        newUser.password = password
        await newUser.save()
        res.json({message :"User Ajouter Avec Success"})
      } catch (error) {
        res.json({message :"Error lors de l'ajout "})
      }
    }
  } catch (error) {
    res.status(500).json({message:"User Non Trouver"})
  }
})

routes.post("/Login", async (req,res) => {
  const {email, password} = req.body
  try {
    const user = await User.findOne({email, password})
    if (!user) {
      return res.status(404).json({message: "Aucun User Trouver"})
    }
    res.status(200).json({message:"User Trouver !",user})
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})

module.exports = routes
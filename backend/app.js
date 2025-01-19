const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors');
const User = require("./models/user")
const app = express()
dotenv.config()

// app.use(cors());
app.use(cors());
app.use(express.json());

const MONGODB_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 3000

mongoose.connect(MONGODB_URL)
.then(()=>{
  app.listen(PORT,()=>{
    console.log("server is runing");
  })
})
.catch((error)=>{
  console.log(`${error}`);
})

app.post('/api', async(req,res)=>{
  const {email,password,confirmPassword,firstName,lastName,phone} = req.body
  const NewUser = new User()
  NewUser.cin = email
  NewUser.nom = lastName
  NewUser.prenom = firstName
  NewUser.age = 20
  await NewUser.save()
  console.log("test work")
  res.json({ message: "test is work" ,"data":req.body});
})
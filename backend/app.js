const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require('cors');
// const User = require("./models/user")
const app = express()
dotenv.config()

//midllwers
app.use(cors());
app.use(express.json());
app.use("",require('./routes/user'))

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


const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
dotenv.config()

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

app.get('./test',(req,res)=>{
  res.send("test work")
})
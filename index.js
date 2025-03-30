const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express();


app.get("/",(req,res)=>{
    res.send("This is home page api")
})

app.get("/login",(req,res)=>{
    res.send("This is login page api")
})

app.get("/register",(req,res)=>{
    res.send("This is register page api")
})

app.get("/",(req,res)=>{
    res.send("This is home page api")
})


app.listen(3000,()=>{
    console.log('====================================');
    console.log("Server is running on PORT : 8080");
    console.log('====================================');
})

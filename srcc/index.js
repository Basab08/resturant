const express = require("express");
const path = require("path")  
const app = express();
const staticPath = path.join(__dirname, "../publicc");

app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("hello world from express");
})

app.get("/about",(req,res)=>{
    res.send("hello world from the about page");
})

app.listen(4000,()=>{
    console.log(" listening the port at 8000");
})
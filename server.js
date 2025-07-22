const express = require("express")
const app = express();
const PORT = 9898;

app.get("/",(req,res)=>{
    res.send("<h1>Hello Ankit</h1>");
})

app.listen(PORT,()=>{
    console.log("Server running at port :",PORT)
})
const path = require("path")
const express = require("express")
const app = express()
app.use(express.static("./public"))


app.get('/',(req,res)=>{
    res.sendFile(path.resolve("./index.html"))
   // console.log(path.resolve(__dirname,"./public/index.html"));
})

//console.log("Current working directory:", __dirname)


app.listen(3000, ()=>{
    console.log("Server is linstening at port 3000")
})
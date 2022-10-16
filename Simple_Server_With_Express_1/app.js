const express = require("express")
const app = express()


app.get('/',(req,res)=>{
    res.send("This is my first express example : )")
})

app.get('/about', (req,res)=>{
    res.send("This is about page :)")
})


app.all('*',(req,res)=>{
    res.status(404).send("Sorry in this server doesn't exist path: " +req.path)
    console.log("Server recived a request at "+req.path)
})


app.listen(3000,()=>{
    console.log("The server is lisening at port 3000")
})


const {readFileSync}= require('fs')
const http = require('http')

const homePage = readFileSync('./index.html')
const homePageCss = readFileSync('./index.css')

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    console.clear()
    console.log("Client send request at home page")
    res.writeHead(200,{'content-type' :'text/html'})
    res.write(homePage)
    res.end()
  }
  else if(req.url === '/about'){
    console.clear()
    console.log("Client send request at about page")
    res.writeHead(200,{'content-type':'text/html'})
    res.write("Hello this is the about page !!!")
    res.end()
  }
  else if(req.url === '/index.css'){
    console.clear()
    console.log("CSS file")
    res.writeHead(200,{'content-type' :'text/css'})
    res.write(homePageCss)
    res.end()
  }
  else{
    console.clear()
    console.log("Client sent a not matching request")
    res.writeHead(404,{'content-type':'text/html'})
    res.write("Sorry, this is wrong URL :'(")
    res.end()
  }
})

server.listen(3000)
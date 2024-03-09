// creating server using HTTP Module

const http = require("http")

const server = http.createServer( (request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write("<b>HTTP Server with html response</b></br>")
  response.write("http module is in-built")
  response.end()//to end the response
})

const port = 2022

server.listen(port,()=>{
  console.log( "Server running at:"+port)
})
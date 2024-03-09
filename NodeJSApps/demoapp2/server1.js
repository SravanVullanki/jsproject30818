// creating server using HTTP Module

const http = require("http")

const server = http.createServer( (request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.write("HTTP Server with text response ")
  response.end()
})

const port = 2021

server.listen(port,()=>{
  console.log( "Server running at:"+port)
})
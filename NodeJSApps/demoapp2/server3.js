//creating server using express module
//express is third party module 

const express = require("express")
const app = express() //app is an object

app.get(
  "", (request, response) => { 
    response.setHeader("Content-Type","text/html")
    response.send("Express Server ")
    response.send("Express is called third Party ")
  })

  const port=2023
app.listen(port,()=>
{
  console.log("Server is runnning at port "+port)
})

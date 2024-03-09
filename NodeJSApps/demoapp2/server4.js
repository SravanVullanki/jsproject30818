//creating server using express module
//express is third party module 

const express = require("express")
const app = express() //app is an object

app.get(
  "", (request, response) => { 

    response.send("<b>Hello MSWD </b></br")
  })

  const port=2024
app.listen(port,()=>
{
  console.log("Server is runnning at port "+port)
})

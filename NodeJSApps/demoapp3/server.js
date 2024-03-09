// creating server using express module

const express = require("express")
const app = express()

app.get("",(request,response)=>
{
  response.send("<b>Home Page</b>")
})

app.get("/about",(request,response)=>
{
  response.send("<b>About Page</b>")
})

app.get("/contact",(request,response)=>
{
  response.send("<b>Contact Page</b>")
})

app.get("/login",(request,response)=>
{
  response.send("<b>Login Page</b>")
})

const emp={"id":101,"name":"KLEF","gender":"FEMALE"} //JSON Object

// localhost:2014/displayemp , where displayemp is URI
// URI means endpoint
app.get("/displayemp",(request,response)=>
{
  response.send(emp)
})

app.get("*",(request,response)=>
{
  response.status(404).send("Page Not Found")
})



const port = 2014
app.listen(port, () => {
  console.log(`Server is running at port : ${port}`)
})
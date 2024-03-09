//axios api with async/await

const axios = require("axios")
const apiurl="https://jsonplaceholder.typicode.com/users"

const fetchdata= async ()=>{
  try 
  {
     const response= await axios.get(apiurl)
     const users= response.data;
     users.map((u,index)=>{
      console.log("User Object "+(index+1))
      // console.log(u)
      console.log(u.id)
      console.log(u.username)
      console.log(u.email)
      console.log(u.address.city)
    })

  }
  catch(e)
  {
    console.log(e.message)
  }
}
fetchdata() //function call
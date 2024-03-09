// axios api with then catch & read the data using map function
const axios = require("axios")

const apiurl ="https://jsonplaceholder.typicode.com/users" 

axios.get(apiurl).then((response) => {
  // console.log(response.data)
  const users= response.data;
  users.map((u,index)=>{
    console.log("User Object "+(index+1))
    // console.log(u)
    console.log(u.id)
    console.log(u.username)
    console.log(u.email)
    console.log(u.address.city)
  })
}).catch((err) => {
  console.log(err.message)
});

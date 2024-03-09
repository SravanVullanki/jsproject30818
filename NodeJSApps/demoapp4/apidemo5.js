// fetch api with then catch & read the data using map function

const apiurl ="https://jsonplaceholder.typicode.com/users" 

const fetchdata = () => {
  fetch(apiurl).then((response) => {
    return response.json()
  }).then((result) => {
    // console.log(result)
    const users = result
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
}

fetchdata() //function call
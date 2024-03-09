// fetch api with async/await

const apiurl ="https://jsonplaceholder.typicode.com/users" 

const fetchdata = async ()=>{
  try
  {
    const response = await fetch(apiurl)
    const result = await response.json()
    console.log(result)
  }
  catch(e)
  {
    console.log(e.message);
  }
}

fetchdata()
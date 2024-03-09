axios =require('axios') // using axios api
api= "https://dummyjson.com/users" //defining the api url

const fetchdata = async () => {//using async
  try {//try catch block
    const response = await axios.get(api)//getting the response using axios api with await
    const data = response.data//storing the fetched response in the data variable
    data.users.map((u) => {//using map function to map the data 
      if(u.age>30)//using condition if age>30 then execute if block 
      {
      console.log(`id : ${u.id}`) // console.log  for id
      const fullname = `${u.firstName} ${u.lastName}`//defining full  name by concatination of firstName and lastName
      console.log(`Full Name : ${fullname}`) // console.log for Full name
      console.log(`Age : ${u.age}`)//console.log for age
      }
    })
  } catch (e) {
    console.log(e.message)//console.log for error message if catch block is executed
  }
};

fetchdata(); //calling the fetch data function 

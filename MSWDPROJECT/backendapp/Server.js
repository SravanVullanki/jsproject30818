const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/demoproject14"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express() 
app.use(cors())
app.use(express.json())  // to parse JSON data

const adminrouter = require("./routes/adminroutes")
const jobseekerrouter = require("./routes/jobseekerroutes")

app.use("",adminrouter) // to include all admin routes
app.use("",jobseekerrouter) // to include all job seeker routes

const port=2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/sdpproject"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express() 
app.use(cors())
app.use(express.json())  
const adminrouter = require("./routes/adminroutes")
const customerrouter = require("./routes/customerroutes")

app.use("",adminrouter) // to include all admin routes
app.use("",customerrouter) // to include all  customer routes

const port=2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})
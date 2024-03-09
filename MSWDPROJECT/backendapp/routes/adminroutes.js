//admin routes
const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter  = express.Router()


adminrouter.get("/viewjobseekers",admincontroller.viewjobseekers)
adminrouter.delete("/deletejobseeker/:email",admincontroller.deletejobseeker)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)

module.exports = adminrouter


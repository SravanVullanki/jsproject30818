//job seeker routes

const jobseekercontroller = require("../controllers/jobseekercontroller")

const express = require("express")
const jobseekerrouter  = express.Router()

jobseekerrouter.post("/insertjobseeker",jobseekercontroller.insertjobseeker)
jobseekerrouter.post("/checkjobseekerlogin",jobseekercontroller.checkjobseekerlogin)

module.exports = jobseekerrouter




//customer routes

const customerrcontroller = require("../controllers/customercontroller")

const express = require("express")
const customerrouter  = express.Router()

customerrouter.post("/insertcustomerr",customerrcontroller.insertcustomer)
customerrouter.post("/checkcustomerlogin",customerrcontroller.checkcustomerlogin)

module.exports = customerrouter




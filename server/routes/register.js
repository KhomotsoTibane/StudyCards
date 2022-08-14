const express = require("express");
const controller = require("../controllers/card.controller")
const router = express.Router()

router.post("/register", controller.registerUser)

module.exports = router

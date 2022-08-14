const express = require("express");
const controller = require("../controllers/card.controller")
const router = express.Router()

router.post("/add", controller.addItem)

module.exports = router
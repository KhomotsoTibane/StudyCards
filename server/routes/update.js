const express = require("express");
const controller = require("../controllers/card.controller")
const router = express.Router()

router.patch("/update/:id", controller.updateItem)

module.exports = router
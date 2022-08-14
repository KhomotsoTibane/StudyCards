const express = require("express");
const controller = require("../controllers/card.controller")
const router = express.Router()

router.delete("/delete/:id", controller.deleteItem)

module.exports = router
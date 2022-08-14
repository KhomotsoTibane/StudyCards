const express = require("express");
const controller = require("../controllers/card.controller");
const router = express.Router()


router.get("/find", controller.findAll)

module.exports = router

/*
-----Item Model-----
-item schema
*/
const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    topic:String,
    item:Object,
    user:mongoose.SchemaTypes.ObjectId
})

module.exports = mongoose.model("Item", itemSchema);
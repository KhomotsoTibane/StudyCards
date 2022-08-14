/*
------CRUD operations------
*/
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose");
const Item = require("../models/item.model");
const User = require("../models/user.model");
require("dotenv").config();

const createToken =(_id)=>{
    return jwt.sign({_id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1d" })
}

// //register a new user and provide a cookie
exports.registerUser= async function (req,res){

    const {username, password} = req.body

    try {
      const newUser = await User.register(username, password)

      //create token for the user
      const token = createToken(newUser._id)
  
      res.status(200).json({username, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// //log the user in and provide a cookie
exports.loginUser = async function (req,res){

    const {username, password} = req.body

    try {
        const user = await User.login(username, password)
  
        //create token for the user
        const token = createToken(user._id)
        res.status(200).cookie("token", token).json({username, token})
      } 
    catch (error) {
        res.status(400).json({error: error.message})
      }

}

//find all collections for a registerd user in the database once logged in
exports.findAll = async function(req, res){
    const payload = jwt.verify(req.cookies.token, process.env.ACCESS_TOKEN_SECRET);
    
    Item.where({user:new mongoose.Types.ObjectId(payload._id)}).find(function(err, foundItems){
        if(err){
            console.log(err);
            res.status(500).send({ message: "Some error occurred while retriving the items." })
        }else{
            //return found items
            console.log("found", foundItems.length);
            res.status(200).json(foundItems);
        }
    })
}

// add a collection item to the database with the current user credentials
exports.addItem = async function(req,res){
    
    const {topic, createNotes} = req.body
    const payload = jwt.verify(req.cookies.token, process.env.ACCESS_TOKEN_SECRET);

    try {
        const collection = await Item.create({ 
            topic:topic,
            item: createNotes,
            user: new mongoose.Types.ObjectId(payload._id)
         })
        res.status(200).json(collection)
        
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
}

exports.deleteItem = async function(req,res) {
    const { id } = req.params
    console.log("id: ",id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Collection does not exist"})
      }
    
    const collection = await Item.findOneAndDelete({_id: id})
    
    if(!collection) {
        return res.status(400).json({error: "Collection does not exist"})
    }    
    
    res.status(200).json(collection)
}

/* use the id (query) recived from the client to search the database for an item with the matching id once that item has been found,
update the item with the latest details recieved from the client (updtedItem) 
*/
exports.updateItem = async function(req,res){

    const { id } = req.params
    let updatedItem = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Collection does not exist"})
    }
    
    const collection = await Item.findOneAndUpdate({_id: id}, {item:updatedItem.item, topic:updatedItem.topic})

    if (!collection) {
        return res.status(400).json({error: "Something went while trying tp updating the data!"})
    }
    
    res.status(200).json(collection)
}

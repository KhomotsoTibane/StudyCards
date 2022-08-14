const Item = require('../models/item.model')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


//find all collections for a registerd user in the database once logged in
exports.getCollections = async function(req, res){
    
    const user_id = req.user._id
        
    Item.where({user:user_id}).find(function(err, collections){
        if(err){
            res.status(500).send({ message: "Some error occurred while retriving the items." })
        }else{
            //return found items
            res.status(200).json(collections);
        }
    })
}

// add a collection item to the database with the current user credentials
exports.createCollection = async function(req,res){
    
    const {topic, createNotes} = req.body
    const user_id = req.user._id

    try {
        const collection = await Item.create({ 
            topic:topic,
            item: createNotes,
            user: user_id
         })
        res.status(200).json(collection)
        
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
}

exports.deleteCollection = async function(req,res) {
    
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
exports.updateCollection = async function(req,res){

    const { id } = req.params
    let updatedItem = req.body
    console.log(updatedItem);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Collection does not exist"})
    }
    
    const collection = await Item.findOneAndUpdate({_id: id}, {item:updatedItem.item, topic:updatedItem.topic})

    if (!collection) {
        return res.status(400).json({error: "Something went while trying tp updating the data!"})
    }
    
    res.status(200).json(collection)
}


const express = require('express')
const {createCollection, getCollections, deleteCollection, updateCollection} = require('../controllers/collectionController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all collections
router.get('/', getCollections)

// POST a new collection
router.post('/create', createCollection)

// DELETE a collection
router.delete('/delete/:id', deleteCollection)

// UPDATE a collection
router.patch('/update/:id', updateCollection)


module.exports = router
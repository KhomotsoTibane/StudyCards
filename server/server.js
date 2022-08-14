require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const collectionRoutes = require('./routes/collections')
const userRoutes = require('./routes/user')

// express app
const app = express()
app.use(cors({
    credentials:true,
    origin: 'https://sweet-biscotti-3d0038.netlify.app',
  }));

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/collections',collectionRoutes)
app.use('/api/user',userRoutes)



// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
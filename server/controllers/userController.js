const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const createToken =(_id)=>{
  return jwt.sign({_id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "3d" })
}

// login a user
const loginUser = async function (req,res){

  const {username, password} = req.body

  try {
      const user = await User.login(username, password)

      //create token for the user
      const token = createToken(user._id)
     // res.status(200).cookie("token", token).json({username, token})
    
     res.status(200).json({username, token})
    } 
  catch (error) {
      res.status(400).json({error: error.message})
    }

}

// app.post("/logout",(req,res)=>{
//   res.cookie("token", "").send();
// })

// signup a user
const registerUser= async function (req,res){

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
module.exports = { registerUser, loginUser }
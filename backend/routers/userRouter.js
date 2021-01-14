import express from 'express'
import User from '../models/userModel.js'
import data from '../data.js' // dont forget .js extension
import expressAsyncHandler from 'express-async-handler'

//expresss.Router makes our code modular instead of having all routes in server.js
const userRouter = express.Router()

//get method to see api
//mongoose is async dont forget to make it that way
userRouter.get('/seed', expressAsyncHandler(async (req,res) =>{
    //await User.remove({})
    const createdUser = await User.insertMany(data.users)
    res.send({createdUser})
})
)
//espressAsyncHandler is a package npm install express-async-handler for server errors

export default userRouter
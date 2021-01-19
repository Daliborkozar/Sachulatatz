import express from 'express'
import User from '../models/userModel.js'
import data from '../data.js' // dont forget .js extension
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler'
import { generateToken } from '../utils.js'


//expresss.Router makes our code modular instead of having all routes in server.js
const userRouter = express.Router()


//SEND TO BACKEND
//get method to see api
//mongoose is async dont forget to make it that way
userRouter.get('/seed', expressAsyncHandler(async (req,res) =>{
    //await User.remove({})
    const createdUser = await User.insertMany(data.users)
    res.send({createdUser})
})
)

//signin post request
userRouter.post('/signin', expressAsyncHandler(async(req,res) => {
    const user = await User.findOne({email: req.body.email}) //
    if(user){
        //user entered password and pass in database     
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
            return
        }else res.status(401).send({message: 'neispravna lozinka'})
    }
    res.status(401).send({ message:'Nepostojeca email adresa '})
})
)

//new user post request
userRouter.post('/register', expressAsyncHandler(async(res,req)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    })
    const createdUser = await user.save()
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser)
    })
}))

export default userRouter
import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Orders from '../models/orderModel.js'
import {isAuth} from '../utils.js'


const orderRouter = express.Router()

orderRouter.post(
    '/',
    isAuth,//middleware call before 
    expressAsyncHandler(async(req, res)=> {
    if(req.body.orderItem.length === 0) {
        res.status(400).send({ message: 'Korpa je prazna'})
    }else {
        const order = new Orders({
            orderItem: req.body.orderItem,
            shippingAddress: req.body.shippingAddress,
            itemPrice: req.body.price,
            totalPrice: req.body.totalPrice,
            //define a middleware to authenticate user utils.js
            user: req.user._id,
        })
        const createOrder = await order.save()
        res
            .status(201)
            .send({message: 'New Order Created', order: createOrder}) //pass order to FE
    }
    
}
))


export default orderRouter
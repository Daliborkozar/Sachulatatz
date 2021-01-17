import express from 'express'
import Product from '../models/productsModel.js'
import data from '../data.js' // dont forget .js extension
import expressAsyncHandler from 'express-async-handler'

const productRouter = express.Router()

//FRONTEND product list
productRouter.get('/', expressAsyncHandler(async(req,res) => {
    const products = await Product.find({})
    res.send(products)
})
)

//ADD PRODUCTS TO BACKEND
productRouter.get('/seed', expressAsyncHandler(async(req,res)=> {
    const createdProducts = await Product.insertMany(data.products)
    res.send({createdProducts})
}))

//FRONTEND product details
productRouter.get('/:id', expressAsyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product not found'})
    }
    
}))

export default productRouter
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    image: { type: String, required: true },
    salePrice:{type: Number},
    price:{type: Number, required: true},
    rating:{type: Number, required: true},
    numReviews: {type: Number, required: true},
    descpription:{type: String, required: true},
    countInStock:{type: Number, required: true},
},{
    timestamps: true
})

const Products = mongoose.model('Products', productSchema)

export default Products

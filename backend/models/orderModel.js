import mongoose from 'mongoose'
//https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose
const orderSchema = new mongoose.Schema({
    orderItems: [{
        Image: {type: String, required: true},
        name: {type: String, required: true},
        size: {type: String, required: true},
        qty: {type: Number, required: true},
        price: {type: Number, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true,
        },
    shippingAddress: {
        fullName: { type: String, required: true},
        address: { type: String, required: true},
        postalCode: {type: Number, required: true},
        phone: { type: Number, required: true},
        },
    itemPrice:{ type: String, required: true},
    shippingPrice:{ type: String, required: true},
    totalPrice:{ type: String, required: true},
    //user that made order
    user: { type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }
    //TODO: payments implementation, delivery tracking
}]

},{
    timestamps: true
})

const Orders = mongoose.model('Orders', orderSchema)

export default Orders
import mongoose from 'mongoose'
//https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose

const orderSchema = new mongoose.Schema({
    orderItem: [{
        image: {type: String},
        name: {type: String},
        size: {type: String},
        qty: {type: Number},
        price: {type: Number},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            //required: true,
        },
    shippingAddress: {
        fullName: { type: String},
        address: { type: String},
        postalCode: {type: Number},
        phone: { type: Number},
        },
    itemPrice:{ type: String },
    //shippingPrice:{ type: String },
    totalPrice:{ type: String},
    //user that made order
    user: { type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        //required: true
    }
    //TODO: payments implementation, delivery tracking
}]

},{
    timestamps: true
})

const Orders = mongoose.model('Orders', orderSchema)

export default Orders
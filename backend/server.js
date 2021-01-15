import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRoute.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/sachulatatz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
})

// app.get('/api/products/:id', (req,res) => {
//     let product = data.products.find((x) => x._id === req.params.id)
//     res.send(product)
    // if(product){
    //     res.send(product)
    // } else {
    //     res.status(404).send({ message: 'Product not found'})
    // }
// })
//static data 
// app.get('/api/products', (req, res) => {
//     res.send(data.products)
// })



app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.get('/', (req,res) => {
    res.send('Server is ready')
})

//error catcher in router
app.use((err,req,res,next) =>{ res.status(500).send({message: err.message }) })

const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`Server at http://localhost:${port}`)
})
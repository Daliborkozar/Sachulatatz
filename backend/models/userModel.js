import mongoose from 'mongoose'

//1 user shema 

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: { type: String, default: false}
},{
//2 options
    timestamps: true // time stamps for records
})

const User = mongoose.model('User', userSchema)

export default User
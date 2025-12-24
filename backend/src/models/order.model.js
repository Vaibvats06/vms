import mongoose from 'mongoose'

const orderSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true
    },
     seller:{
        type:String,
        required:true,
    },
    qty:{
        type:String,
    }
})

const Order = mongoose.model("Order", orderSchema)
export default Order
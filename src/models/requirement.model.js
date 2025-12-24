import mongoose from 'mongoose'

const requirementSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true
    },
    qty:{
        type:String,
    }
})

const Requirements = mongoose.model("Requirements", requirementSchema)
export default Requirements
import Requirement from '../models/requirement.model.js'
export async function requirement(req,res){
    try {
    const {productName,productQty}=req.body;
    const response=await Requirement.create({productName,qty:productQty})
    res.status(201).json('data saved')  
    } catch (error) {
        console.log(error)
        
    }
}

export async function showRequirement(req,res){
    try {
        const requirement=await Requirement.find({})
        res.status(201).json({requirement})
        
    } catch (error) {
        console.log(error)
        
    }
}
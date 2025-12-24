import Requirement from '../models/requirement.model.js'
export async function requirement(req,res){
    try {
    const {productName,productQty}=req.body;
    console.log(productName,productQty)
    if(!productName || !productQty){
         res.status(400).json({error:"productName and productQty are required"})
    }
    const existingRequirement=await Requirement.findOne({productName});
    if(existingRequirement){
        return res.status(400).json({message:"Requirement already exists for this product please modify quantity"})
    }
    const response=await Requirement.create({productName,qty:productQty})
    res.status(201).json('added requirement')  
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})       
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
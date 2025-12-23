import Product from '../models/product.model.js'
export async function addProduct(req,res){
    const {productName,exp,mrp,rate,seller,rack}=req.body
    console.log(productName)
    try{
        const newProduct=await Product.create({
            productName:productName.toUpperCase(),
            exp,
            mrp,
            rate,
            seller,
            rack
        })
        console.log(newProduct)
        res.status(201).json({"message":"added"})
    }catch(error){
        console.error("Error adding product:", error)
        res.status(500).json({error:"Internal server error"})
    }
}
export async function searchProduct(req,res){
    try{
        const allProduct=await Product.find({});
        console.log('Search api called')
        res.status(201).json({"product":allProduct})
    }catch(error){
        console.error("Error adding product:", error)
        res.status(500).json({error:"Internal server error"})
    }
    
}
import Product from '../models/product.model.js'
import Order from '../models/order.model.js'
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

export async function getProductByName(req,res){
    const {productName,qty}=req.body;
    try{
        if(!productName || !qty){
            return res.status(400).json({error:"productName and qty are required"})
        }
        const product=await Product.findOne({productName:productName.toUpperCase()}).sort({rate:1});
        console.log("Product found:",product)
        if(!product){
            return res.status(404).json({error:"Product not found"})
        }
        const isOrderExist=await Order.find({productName:product.productName});
       if(isOrderExist){
         return res.status(400).json({message:"Order already exists"});  
       }
       const orderList=await Order.create({productName:product.productName,seller:product.seller,qty});
        return res.status(400).json({message:"Order created",orderList});
    }catch(error){
        console.error("Error fetching product by name:", error)

        throw error;
    }   
}

export async function modifyProductqty(req,res){
    const {productName,qty}=req.body;
    try{
        if(!productName || !qty){
            return res.status(400).json({error:"productName and qty are required"})
        }
        const isOrderExist=await Order.find({productName});
        console.log("Order found:",isOrderExist)
        if(isOrderExist.length===0){
            return res.status(400).json({"message":`${productName} not found in orderlist Add Firsr`})
        }
        isOrderExist[0].qty=qty;
        await isOrderExist[0].save();
        return res.status(200).json({message:"Order quantity updated"});
    }catch(error){
        console.error("Error fetching product by name:", error)

        throw error;
    }   
}


export async function confirmOrderRecieved(req,res){
    const {productName}=req.body;
    try{
        if(!productName){
            return res.status(400).json({error:"productName are required"})
        }
        const isOrderExist=await Order.deleteOne({productName});
        console.log("Order found:",isOrderExist)
        if(isOrderExist.deletedCount===0){
            return res.status(400).json({"message":`${productName} not found in orderlist Add First`})
        }
        return res.status(200).json({message:"Order deleted successfully"});
    }catch(error){
        console.error("Error fetching product by name:", error)

        throw error;
    }   
}
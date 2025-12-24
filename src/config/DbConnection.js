import mongoose from "mongoose";
 
export const DbConnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected`)
    }
    catch(error){
        console.log("error in connecting db",error)
    }
}
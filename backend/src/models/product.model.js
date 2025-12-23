import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productName: {
    type: String, 
    trim: true,       // ✅ removes extra spaces
    required: true,
  },
  exp: {
    type: Date,
    required: true,
  },
  mrp: {
    type: Number,     // ✅ better to store MRP as number instead of string
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  seller: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  rack: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
}, { timestamps: true }) // ✅ automatically adds createdAt & updatedAt

const Product = mongoose.model("Product", productSchema)
export default Product

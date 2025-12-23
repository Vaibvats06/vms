import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
const AddProduct = () => {
    const [productName,setProductName]=useState('')
      const [exp,setExp]=useState('')
      const [numMrp,setNumMrp]=useState('')
      const [numRate,setNumRate]=useState('')
      const [seller,setSeller]=useState('')
      const [rack,setRack]=useState('')
      const NewProductHandle=async(e)=>
        {
         e.preventDefault();
          const mrp=Number(numMrp)
          const rate=Number(numRate)
         try{
           if(productName===''||exp===''||mrp===''||rate===''||seller===''||rack===''){
            return toast.error('Fill all data')
           }
           
           if(mrp<=rate){
            return toast.error('MRP should be greater than RATE')
           }
           const data=await axios.post("http://localhost:4000/api/product/add",{productName,exp,mrp,rate,seller,rack})
          toast.success('Added Successfully')
          window.location.reload()
          // setProductName('');
          // setExp("");
          // setNumMrp("");
          // setRack("");
          // setNumRate("");
          // setSeller("");
    
    
         }catch(error){
          console.log(error)
         }
         
    
          
        }
  return (
     <div className='mx-35 my-30 items-center flex flex-col w-3/4 h-1/2 bg-slate-200 border-slate-100  shadow-2xl shadow-gray-600 rounded-md '>
             <p className='my-10 font-semibold text-2xl text-gray-500'>Add Purchase</p>
              <form >
                 <div className='gap-10  grid grid-cols-3'>
                <input type="text" name="" id="" className='outline w-60 py-1 px-2 uppercase  rounded-sm gap-2' placeholder='Product Name' value={productName} onChange={(e)=>{setProductName(e.target.value)}} />
                <input type="date" name="" id="" className='outline w-60 py-1 px-2 rounded-sm gap-2' placeholder='EXP' value={exp} onChange={(e)=>{setExp(e.target.value)}} />
                <input type="text" name="" id="" className='outline w-60 py-1 px-2 rounded-sm gap-2' placeholder='MRP' value={numMrp} onChange={(e)=>{setNumMrp(e.target.value)}} />
                <input type="text" name="" id="" className='outline w-60 py-1 px-2 rounded-sm gap-2' placeholder='RATE' value={numRate} onChange={(e)=>{setNumRate(e.target.value)}} />
                <select name="" id="" className='outline w-60 py-1 px-2 rounded-sm gap-2' onChange={(e)=>{setSeller(e.target.value)}} value={seller}>
                  <option value="">Seller</option>
                  <option value="Rahat Pharma">Rahat Pharma</option>
                  <option value="Gupta Traders">Gupta Traders</option>
                  <option value="other">Other</option>
                </select>
                <input type="text" name="" id="" className='outline w-60 py-1 px-2 uppercase rounded-sm gap-2' placeholder='Rack (e.g CA-01)' onChange={(e)=>{setRack(e.target.value)}} value={rack} />
                </div>
                <div className='flex justify-center items-center mt-8'>
                  <button className='border px-10 py-1.5 rounded-md cursor-pointer' onClick={NewProductHandle}>Add Product</button>
                </div>
              </form>
            </div> 
  )
}

export default AddProduct
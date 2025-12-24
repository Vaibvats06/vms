import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import {toast} from 'react-hot-toast'

const Order = () => {
  const [err,setErr]=useState(null)
  const [stateOrder,setStateOrder]=useState('order')
  const [refresh, setRefresh] = useState(false);
  const [requirements, setRequirements] = useState([]);
  const productSave=useSelector((state)=>state.product.products)

  useEffect(()=>{
    async function fetchRequirement(){
    const requirement=await axios.get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/requirements/add`)
    setRequirements(requirement.data.requirement)
    }
    fetchRequirement()
  },[refresh])

  

  
  /* Add requirement */
  const [productName, setProductName] = useState("");
  const [productQty, setProductQty] = useState("");
/* Add requirement */
  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductQty, setEditedProductQty] = useState("");
  
  
  const RequirementHandler = async(e) => {
    e.preventDefault();
    const newProduct = {
      productName: productName.toUpperCase(),
      productQty: productQty,
    };
   
    
    
    const response =await axios.post(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/requirements/add`,newProduct)
    // console.log(response.data)
    // if(response.status===400 && response.data.message==="Requirement already exists for this product please modify quantity"){
    //   console.log('here')
    //   return setErr("Requirement already exists for this product please modify quantity")
    // }
   
    // if(response.status===201){
    //   toast.success('Saved')
    //   setRefresh(prev => !prev);
    // }
    
    // setProductName("");
    // setProductQty("");
  };

  const getDealerRate = (productName, seller) => {
  const item = productSave.find(
    (p) =>
      p.productName === productName &&
      p.seller === seller
  );

  return item ? item.rate: "- - -";
};

  return (
    <div className="flex w-full">
      {stateOrder==='order'&&
       <div className="w-[65%] bg-[#F9F5F0] container p-2">
        {requirements.length !== 0 ? (
          <div>
            <div className="border flex items-center text-center font-semibold bg-gray-100">
              <div className="w-[5%]  border-r">S.No</div>
              <div className="w-[37%] border-r">Product Name</div>
              <div className="w-[10%] border-r">Qty</div>
              <div className="w-[12%] border-r">Gupta</div>
              <div className="w-[12%] border-r">Rahat</div>
              <div className="w-[12%] border-r">Nearl</div>
              <div className="w-[12%]">Devyansh</div>
            </div>
            {requirements.map((product,index) => (
             <div className="border-l border-r border-b text-gray-800 flex" key={index}>
              <div className="w-[5%] text-center border-r">{index+1}</div>
              <div className="w-[37%] text-center border-r">{product.productName}</div>
              <div className="w-[10%] text-center border-r">{product.qty}</div>
              <div className="w-[12%] text-center border-r">
                {getDealerRate(product.productName,"gupta traders")}
              </div>
              <div className="w-[12%] text-center border-r">                {getDealerRate(product.productName,"rahat pharma")}
</div>
              <div className="w-[12%] text-center border-r">
                {getDealerRate(product.productName,"NEARL")}
              </div>
              <div className="w-[12%] text-center">
                {getDealerRate(product.productName,"DEVYANSH")}
              </div>
              </div>
            ))}

            <div className="flex justify-end mt-2 mx-2  text-blue-400 underline cursor-pointer" onClick={()=>{setStateOrder('edit')}} >edit</div>
          </div>
        ) : (
          <p className="flex justify-center lg:pt-20">
            Add products to find the best dealers offering medicines at the
            lowest prices on the right-hand side panel.
          </p>
        )}

       
      </div>
}

{/* edit bar */}

   {stateOrder==='edit'&&
       <div className="w-[65%] bg-[#F9F5F0] container p-2">
        {requirements.length !== 0 ? (
          <div>
            <div className="border flex items-center text-center font-semibold bg-gray-100">
              <div className="w-[5%]  border-r">S.No</div>
              <inpu className="w-[37%] border-r">Product Name</inpu>
              <div className="w-[10%] border-r">Qty</div>
            </div>
            {requirements.map((product,index) => (
             <div className="border-l border-r border-b text-gray-800 flex" key={index}>
              <div className="w-[5%] text-center border-r">{index+1}</div>
              <input type="input" className="w-[37%] text-center border-r outline-0" value={product.productName}/>
              <input type="input" className="w-[10%] text-center border-r outline-0" value={product.qty}/>
              </div>
            ))}

            <div className="flex justify-end mt-2 mx-2  text-blue-400 underline cursor-pointer" onClick={()=>{setStateOrder(prev)}} >back</div>
          </div>
        ) : (
          <p className="flex justify-center lg:pt-20">
            No Order exist here Please Add Requirement from Right Side Panel.
          </p>
        )}

       
      </div>
}

      {/*Add Order Requiremet Side */}
      <div className="w-[35%] px-15 my-20 ">
        <div className="border  h-full rounded-xl border-gray-600 ">
          <p className="flex justify-center py-2 font-semibold">
            Add Product Here
          </p>
          <form
            onSubmit={RequirementHandler}
            className="px-10 w-full pt-10 flex flex-col  text-gray-600 "
          >
            <div className="mb-3 gap-0.5 flex flex-col ">
              <p>Product Name</p>
              <input
                type="text"
                placeholder=""
                className="outline-none border focus:border-orange-500 rounded-xs w-full uppercase px-1"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
                value={productName}
              />
            </div>
            <div className="mb-3 gap-0.5 flex flex-col ">
              <p>Quantity</p>
              <input
                type="text"
                placeholder=""
                className="outline-none border focus:border-orange-500 rounded-xs px-1 w-full"
                onChange={(e) => {
                  setProductQty(e.target.value);
                }}
                value={productQty}
              />
            </div>
            {err && <p className="text-red-500 mb-2">{err}</p>}
            <button
              type="submit"
              className="bg-blue-400 py-1 rounded-sm text-white cursor-pointer"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;

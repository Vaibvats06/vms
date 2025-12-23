import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setproducts } from '../redux/productsSlice';

const useGetProduct =() => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchProduct=async()=>{
    const response=await axios.get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/api/product/search`);
    dispatch(setproducts(response.data.product))
    }
    fetchProduct();
    
  },[])
  
}

export default useGetProduct
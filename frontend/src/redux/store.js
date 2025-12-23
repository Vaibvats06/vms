import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../redux/productsSlice'





export const store = configureStore({
  reducer: {
    product:productSlice
  },
  
})

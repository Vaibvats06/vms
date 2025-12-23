import { createSlice } from "@reduxjs/toolkit";

const products=createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setproducts: (state, action) => {
        state.products = action.payload;
    },
  },
});

export const { setproducts} = products.actions;
export default products.reducer;
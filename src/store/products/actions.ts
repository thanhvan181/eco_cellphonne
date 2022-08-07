import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, getproductsCate, read, searchProduct } from "../../service/product";
import * as TYPES from "./type";

export const getAlls = createAsyncThunk(TYPES.GET_PRODUCTS, async () => {
     try {
    
       const response = await getAll();
         const data = response.data;
         console.log("Data", data
             
         )

      
       return data;
     } catch (err: any) {
       
    //    return rejectWithValue(err.response.data);
     }
  
});
export const readone = createAsyncThunk(TYPES.GET_PRODUCT, async (params: any) => {
  try {
    const response = await read(params);
    const data = response.data;
    console.log("Dataone", data);

    return data;
  } catch (err: any) {
    //    return rejectWithValue(err.response.data);
  }
  

});
export const getProductinCategory = createAsyncThunk(TYPES.GET_PRODUCTINCATE, async (params: any) => {
  try {
    const response = await getproductsCate(params);
    const data = response.data;
    console.log("Data", data);

    return data;
  } catch (err: any) {
    //    return rejectWithValue(err.response.data);
  }
  

});
export const searchSanpham = createAsyncThunk(
  "product/searchproduct",
  async (params: any) => {
    const { data } = await searchProduct(params);

    return data;
  }
);

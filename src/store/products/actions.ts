import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll, readoneProduct } from "../../service/product";
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
    const response = await readoneProduct(params);
    const data = response.data;
    console.log("Data", data);

    return data;
  } catch (err: any) {
    //    return rejectWithValue(err.response.data);
  }
  

});
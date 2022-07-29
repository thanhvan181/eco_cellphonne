import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../service/product";
import * as TYPES from "./type";

export const getAlls = createAsyncThunk(TYPES.GET_PRODUCTS, async (params: any) => {
     try {
    
       const response = await getAll();
         const data = response.data;
         console.log("Data", data
             
         )

       if (params.onSuccess) {
         params.onSuccess(data);
       }
       return data;
     } catch (err: any) {
       if (params.onError) {
         params.onError(err.response.data);
       }
    //    return rejectWithValue(err.response.data);
     }
  
});
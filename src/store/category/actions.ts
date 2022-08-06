import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, list, read } from "../../service/category";
import * as TYPES from "./type";

export const fetchMany = createAsyncThunk(TYPES.GET_CATEGORYS, async () => {
  try {
    const response = await list();
    const data = response.data;
    console.log("Data", data);

    return data;
  } catch (err: any) {
    //    return rejectWithValue(err.response.data);
  }
});
export const readone = createAsyncThunk(
  TYPES.GET_CATEGORY,
  async (params: any) => {
    try {
      const response = await read(params);
      const data = response.data;
      console.log("Data", data);

      return data;
    } catch (err: any) {
      //    return rejectWithValue(err.response.data);
    }
  }
);
export const createcategory = createAsyncThunk(
  TYPES.ADD_CATEGORY,
  async (params: any) => {
    try {
      console.log("Params", params);
      const response = await create(params);
      const data = response.data;
      console.log("Data", data);

      return data;
    } catch (err: any) {
      //    return rejectWithValue(err.response.data);
    }
  }
);

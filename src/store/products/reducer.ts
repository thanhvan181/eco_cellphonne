
import { createSlice } from "@reduxjs/toolkit"
import { readoneProduct } from "../../service/product";
import { getAlls, readone } from "./actions";


const initialState =  {
    list: {
        loading: false,
        result: [],
        error: { },
    },
    item: {
        loading: false,
        result: { },
        error: { },
    },
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: {
    [getAlls.pending as any]: (state, action) => {
      state.list.loading = true;
      state.list.result = [];
      state.list.error = {};
    },
    [getAlls.fulfilled as any]: (state, action) => {
      console.log("Actions", action);
      state.list.loading = false;
      state.list.result = action.payload;
      state.list.error = {};
    },
    [getAlls.rejected as any]: (state, action) => {
      state.list.loading = false;
      state.list.error = action.error;
      state.list.result = [];
    },
    [readone.pending as any]: (state, action) => {
      state.item.loading = true;
      state.item.result = {};
      state.item.error = {};
    },
    [readone.fulfilled as any]: (state, action) => {
      console.log("Actions", action);
      state.item.loading = false;
      state.item.result = action.payload;
      state.item.error = {};
    },
    [readone.rejected as any]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
      state.item.result = {};
    },
  },
});
export default productSlice.reducer;
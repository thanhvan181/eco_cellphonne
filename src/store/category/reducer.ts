import { createSlice } from "@reduxjs/toolkit";
import { read } from "../../service/product";
import { createcategory, fetchMany, readone } from "./actions";

const initialState = {
  list: {
    loading: false,
    result: [],
    error: {},
  },
  item: {
    loading: false,
    result: {},
    error: {},
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: {
    [fetchMany.pending as any]: (state, action) => {
      state.list.loading = true;
      state.list.result = [];
      state.list.error = {};
    },
    [fetchMany.fulfilled as any]: (state, action) => {
      console.log("Actions", action);
      state.list.loading = false;
      state.list.result = action.payload;
      state.list.error = {};
    },
    [fetchMany.rejected as any]: (state, action) => {
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
    [createcategory.pending as any]: (state, action) => {
      state.item.loading = true;
      state.item.result = {};
      state.item.error = {};
    },
    [createcategory.fulfilled as any]: (state, action) => {
      console.log("Actions", action);
      state.item.loading = false;
      state.item.result = action.payload;
      state.item.error = {};
    },
    [createcategory.rejected as any]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
      state.item.result = {};
    },
  },
});
export default categorySlice.reducer;

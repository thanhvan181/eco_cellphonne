
import { createSlice } from "@reduxjs/toolkit"
import { getAlls } from "./actions";


const initialState =  {
    list: {
        loading: false,
        result: { },
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
      state.item.loading = true;
      state.item.result = {};
      state.item.error = {};
    },
    [getAlls.fulfilled as any]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
      state.item.error = {};
    },
    [getAlls.rejected as any]: (state, action) => {
      state.item.loading = false;
      state.item.error = action.error;
      state.item.result = {};
    },
  },
});
export default productSlice.reducer;
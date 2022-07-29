
import { combineReducers } from "redux";
import productSlice from "./products/reducer";



const rootReducer = combineReducers({
  product: productSlice,
});
export default rootReducer;
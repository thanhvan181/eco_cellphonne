
import { combineReducers } from "redux";
import productSlice from "./products/reducer";
import cartSlide from "./cart/cartSlide";



const rootReducer = combineReducers({
  product: productSlice,
  cart : cartSlide
});
export default rootReducer;
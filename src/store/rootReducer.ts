import { combineReducers } from "redux";
import productSlice from "./products/reducer";
import cartSlide from "./cart/cartSlide";
import categorySlice from "./category/reducer";

const rootReducer = combineReducers({
  product: productSlice,
  category: categorySlice,
  cart: cartSlide,
});
export default rootReducer;

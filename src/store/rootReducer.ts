import { combineReducers } from "redux";
import productSlice from "./products/reducer";
import cartSlide from "./cart/cartSlide";
import categorySlice from "./category/reducer";
import authSlice from "./user/userSlide";

const rootReducer = combineReducers({
  product: productSlice,
  category: categorySlice,
  cart: cartSlide,
  user: authSlice,
});
export default rootReducer;

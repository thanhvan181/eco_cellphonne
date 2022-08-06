import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems") as any)
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart(state: any, action: any) {
      console.log("actionscar", action);

      const itemIndex = state.items.findIndex(
        (item: any) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuanlity += 1;

        message.success(`Them ${state.items[itemIndex].name} gio hang`);
      } else {
        const templateProduct = { ...action.payload, cartQuanlity: 1 };
        state.items.push(templateProduct);
          message.success("Them san pham moi thanh cong ");
        console.log("tempalteProduct", templateProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItemFromCart(state, action) {
      console.log("actions", action);

      const id = action.payload;
      state.items = state.items.filter((item: any) => item._id !== id);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
        message.error(`xoa khoi gio hang`);
    },

    // increaseCart(state, action) {
    //     state.items.find(item => item.id === action.payload).quantity++;
    // },
    decreaseCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item: any) => item._id === action.payload._id
      );
      if (state.items[itemIndex].cartQuanlity > 1) {
        state.items[itemIndex].cartQuanlity -= 1;
          message.success(`Xoa ${action.payload.name} so luong`);
      } else if (state.items[itemIndex].cartQuanlity === 1) {
        const nextCartItems = state.items.filter(
          (item: any) => item._id !== action.payload._id
        );
        state.items = nextCartItems;

        localStorage.setItem("cartItems", JSON.stringify(state.items));
          message.error(`xoa khoi gio hang`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    getTotals(state: any, action: any) {
      let { total, quantity } = state.items.reduce(
        (cartTotal: any, cartItem: any) => {
          
              const { originalPrice, cartQuanlity: cartQuantity } = cartItem;
        
              const itemTotal = originalPrice * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          console.log("CART ToTal: ", cartTotal);

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      // total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeItemFromCart, decreaseCart, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;

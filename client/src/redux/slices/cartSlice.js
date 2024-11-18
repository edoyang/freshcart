import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const loadCartFromCookies = () => {
  const savedCart = Cookies.get("cart");
  return savedCart ? JSON.parse(savedCart) : { items: [], total_price: 0 };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromCookies(),
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }

      state.total_price = calculateTotalPrice(state.items);
      Cookies.set("cart", JSON.stringify(state), { expires: 1 / 24 }); // Expires in 1 hour
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (index >= 0) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in the cart!`
        );
      }

      state.total_price = calculateTotalPrice(state.items);
      Cookies.set("cart", JSON.stringify(state), { expires: 1 });
    },

    addItemOnCart: (state, action) => {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      state.total_price = calculateTotalPrice(state.items);
      Cookies.set("cart", JSON.stringify(state), { expires: 1 / 24 }); // Expires in 1 hour
    },

    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it's not in the cart!`
        );
      }

      state.total_price = calculateTotalPrice(state.items);
      Cookies.set("cart", JSON.stringify(state), { expires: 1 / 24 }); // Expires in 1 hour
    },

    removeAllItems: (state) => {
      state.items = [];
      state.total_price = 0;
      Cookies.remove("cart"); // Delete the cart cookie
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemOnCart,
  removeItem,
  removeAllItems,
} = cartSlice.actions;
export default cartSlice.reducer;

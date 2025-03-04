// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [], // Array para guardar los productos en el carrito
  totalAmount: 0, // Cantidad total de los productos en el carrito
  totalQuantity: 0, // Número total de productos
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }

      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    }
  },
});

export const cartItems = state => state.cart.items;
export const totalAmount = state => state.cart.totalAmount;
export const totalQuantity = state => state.cart.totalQuantity;
 

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

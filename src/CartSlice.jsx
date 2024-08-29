import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // Check if the item already exists in the cart
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If item exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If item does not exist, add a new item
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload;
      // Filter out the item that matches the given name
      state.items = state.items.filter(item => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // Find the item in the array
      const item = state.items.find(item => item.name === name);

      if (item) {
        // Update the item's quantity
        item.quantity = quantity;
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the store
export default CartSlice.reducer;

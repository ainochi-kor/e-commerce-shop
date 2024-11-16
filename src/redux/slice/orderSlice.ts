import { createSlice } from "@reduxjs/toolkit";
import { Order } from "@/types/products.type";

const initialState: {
  orderHistory: Order[];
  totalOrderAmount: null;
} = {
  orderHistory: [],
  totalOrderAmount: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    STORE_ORDERS(state, action) {
      state.orderHistory = action.payload;
    },
  },
});

export const { STORE_ORDERS } = orderSlice.actions;

export const selectOrderHistory = (state: { orders: typeof initialState }) => {
  return state.orders.orderHistory;
};

export default orderSlice.reducer;

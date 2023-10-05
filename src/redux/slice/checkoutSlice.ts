import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { ShippingAddress } from "@/types/products.type";

const initialState = {
  shippingAddress: {} as ShippingAddress,
  billingAddress: {} as ShippingAddress,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    SAVE_SHIPPING_ADDRESS: (state, action) => {
      state.shippingAddress = action.payload;
    },
    SAVE_BILLING_ADDRESS: (state, action) => {
      state.billingAddress = action.payload;
    },
  },
});

export const { SAVE_BILLING_ADDRESS, SAVE_SHIPPING_ADDRESS } =
  checkoutSlice.actions;

export const selectShippingAddress = (state: ReduxState) =>
  state.checkout.shippingAddress;
export const selectBillingAddress = (state: ReduxState) =>
  state.checkout.billingAddress;

export default checkoutSlice.reducer;

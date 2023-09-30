import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";
import { Product } from "@/types/products.type";

interface ProductState {
  products: Product[];
  minPrice: null | number;
  maxPrice: null | number;
}

const initalState: ProductState = {
  products: [],
  minPrice: null,
  maxPrice: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initalState,
  reducers: {
    STORE_PRODUCTS(state, action) {
      state.products = action.payload.products;
    },
    GET_PRICE_RANGE(state, action) {
      const { products } = action.payload;

      const array: number[] = [];
      products.map((product: Product) => {
        const price = product.price;
        return array.push(price);
      });

      const max = Math.max(...array);
      const min = Math.min(...array);

      state.minPrice = min;
      state.maxPrice = max;
    },
  },
});

export const { STORE_PRODUCTS, GET_PRICE_RANGE } = productSlice.actions;
export const selectProducts = (state: ReduxState) => state.product.products;
export const selectMinPrice = (state: ReduxState) => state.product.minPrice;
export const selectMaxPrice = (state: ReduxState) => state.product.maxPrice;

export default productSlice.reducer;

"use client";
import useFetchCollection from "@/hooks/useFetchCollection";
import React, { useEffect } from "react";
import productStyle from "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_PRICE_RANGE,
  STORE_PRODUCTS,
  selectProducts,
} from "@/redux/slice/productSlice";
import Loading from "../loading/Loading";
import ProductList from "./productList/ProductList";
import ProductFilter from "./productFilter/ProductFilter";

const Product: React.FC = () => {
  const { data, isLoading } = useFetchCollection("products");
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    console.log({ data });
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );

    dispatch(
      GET_PRICE_RANGE({
        products: data,
      })
    );
  }, [data, dispatch]);

  return (
    <section className={productStyle.product}>
      <aside className={productStyle.filter}>
        {isLoading ? null : <ProductFilter />}
      </aside>
      <div className={productStyle.content}>
        {isLoading ? <Loading basic /> : <ProductList />}
      </div>
    </section>
  );
};

export default Product;

"use client";
import useFetchDocument from "@/hooks/useFetchDocument";
import { useParams } from "next/navigation";
import React from "react";
import productDetailsStyle from "./ProductDetailsClient.css";
import Loading from "@/components/loading/Loading";

const ProductDetailsClient = () => {
  const { id } = useParams();

  const { document: product } = useFetchDocument("products", id as string);

  const addToCart = () => {};

  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  const tomorrowDate = tomorrow.getDate();
  const tomorrowMonth = tomorrow.getMonth();

  return (
    <section className={productDetailsStyle.product}>
      {product === null ? <Loading /> : <></>}
    </section>
  );
};

export default ProductDetailsClient;

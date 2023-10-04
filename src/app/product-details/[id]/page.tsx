import { NextPage } from "next";
import React from "react";
import ProductDetailsClient from "../ProductDetailsClient";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({
  params: { id },
}) => {
  return <ProductDetailsClient />;
};

export default ProductDetailsPage;

import { NextPage } from "next";
import React from "react";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({
  params: { id },
}) => {
  return <div>ProductDetailsPage {id}</div>;
};

export default ProductDetailsPage;

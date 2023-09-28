import { NextPage } from "next";
import React from "react";

interface EditProductPage {
  params: {
    id: string;
  };
}

const EditProductPage: NextPage<EditProductPage> = ({ params: { id } }) => {
  return <div>EditProductPage {id}</div>;
};

export default EditProductPage;

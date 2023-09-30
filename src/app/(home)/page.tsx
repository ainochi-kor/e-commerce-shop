import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";
import HomeClinet from "./HomeClinet";
import Slider from "@/components/slider/Slider";
import Product from "@/components/product/Product";

const HomePage: NextPage = () => {
  return (
    <>
      <Slider />
      <Product />
    </>
  );
};

export default HomePage;

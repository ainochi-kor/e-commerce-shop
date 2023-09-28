import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";
import HomeClinet from "./HomeClinet";

const HomePage: NextPage = () => {
  return (
    <div>
      <HomeClinet />
    </div>
  );
};

export default HomePage;

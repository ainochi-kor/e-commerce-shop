"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";

const HomeClinet: NextPage = () => {
  const router = useRouter();
  return <div onClick={() => router.push("/login")}>HomeClinet</div>;
};

export default HomeClinet;

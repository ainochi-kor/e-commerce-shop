"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const ToastProvicer: React.FC = () => {
  return <ToastContainer autoClose={2000} />;
};

export default ToastProvicer;

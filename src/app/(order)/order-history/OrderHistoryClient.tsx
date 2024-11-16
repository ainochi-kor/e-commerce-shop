"use client";

import useFetchCollection from "@/hooks/useFetchCollection";
import { selectUserID } from "@/redux/slice/authSlice";
import { selectOrderHistory, STORE_ORDERS } from "@/redux/slice/orderSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderHistoryClient: React.FC = () => {
  const {data,isLoading } = useFetchCollection("orders");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [data, dispatch]);

  const orders = useSelector(selectOrderHistory);
  const userID = useSelector(selectUserID);

  return <div>OrderHistoryClient</div>;
};

export default OrderHistoryClient;

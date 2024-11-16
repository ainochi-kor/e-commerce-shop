import { NextPage } from "next";
import React from "react";
import OrderDetailClient from "./OrderDetailsClient";

interface OrderDetailsPageProps {
  params: {
    id: string;
  };
  searchParams: {
    hello: string;
  };
}

const OrderDetailsPage: NextPage<OrderDetailsPageProps> = ({
  params: { id },
  searchParams: { hello },
}) => {
  return <OrderDetailClient />;
};

export default OrderDetailsPage;

import { NextPage } from "next";
import React from "react";

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
  return (
    <div>
      {id} {hello}
    </div>
  );
};

export default OrderDetailsPage;

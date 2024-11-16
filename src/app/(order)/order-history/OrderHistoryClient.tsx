"use client";

import useFetchCollection from "@/hooks/useFetchCollection";
import { selectUserID } from "@/redux/slice/authSlice";
import { selectOrderHistory, STORE_ORDERS } from "@/redux/slice/orderSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import orderHistoryClientStyle from "./OrderHistoryClient.css";
import Heading from "@/components/heading/Heading";
import Loading from "@/components/loading/Loading";
import { formatTime } from "@/utils/formatTime";
import priceFormat from "@/utils/priceFormat";
import { useRouter } from "next/navigation";

const OrderHistoryClient: React.FC = () => {
  const { data, isLoading } = useFetchCollection("orders");
  const dispatch = useDispatch();
  const router = useRouter();

  const orders = useSelector(selectOrderHistory);
  const userID = useSelector(selectUserID);

  const filteredOrders = orders.filter((order) => order.userID === userID);

  const handleClick = (orderID: string) => {
    router.push(`/order-details/${orderID}`);
  };

  useEffect(() => {
    dispatch(STORE_ORDERS(data));
  }, [data, dispatch]);

  return (
    <section className={orderHistoryClientStyle.order}>
      <Heading title="주문 목록" />
      {isLoading && <Loading />}
      <div className={orderHistoryClientStyle.table}>
        {filteredOrders.length === 0 ? (
          <p>주문 목록이 없습니다.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>순서</th>
                <th>주문 날짜</th>
                <th>주문 아이디</th>
                <th>주문 금액</th>
                <th>주문 상태</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => {
                const { id, orderDate, orderTime, orderAmount, orderStatus } =
                  order;

                return (
                  <tr key={order.id} onClick={() => handleClick(order.id)}>
                    <td>{index + 1}</td>
                    <td>{formatTime(orderDate)}</td>
                    <td>{id}</td>
                    <td>{priceFormat(orderAmount)}</td>
                    <td>
                      <p
                        className={
                          orderStatus !== "배송완료"
                            ? orderHistoryClientStyle.pending
                            : orderHistoryClientStyle.delivered
                        }
                      >
                        {orderStatus}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default OrderHistoryClient;

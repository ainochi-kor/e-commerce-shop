"use client";

import React from "react";
import styles from "./OrderDetailsClient.css";
import { useParams, useRouter } from "next/navigation";
import useFetchDocument from "@/hooks/useFetchDocument";
import Heading from "@/components/heading/Heading";
import Loading from "@/components/loading/Loading";
import { CartItem, Order } from "@/types/products.type";
import { CartState } from "@/redux/slice/cartSlice";
import Image from "next/image";
import priceFormat from "@/utils/priceFormat";
import Button from "@/components/button/Button";

const OrderDetailClient: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { document: order } = useFetchDocument("orders", id) as {
    document: Order | null;
  };
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/review-product/${id}`);
  };

  return (
    <section className={styles.details}>
      <Heading title="주문 상세 정보" />
      {order === null ? (
        <Loading />
      ) : (
        <>
          <p>
            <b>주문 아이디</b> {order.id}
          </p>
          <p>
            <b>주문 가격</b> {order.orderAmount}
          </p>
          <p>
            <b>주문 상태</b> {order.orderStatus}
          </p>
          <table>
            <thead>
              <tr>
                <th>순서</th>
                <th>상품</th>
                <th>가격</th>
                <th>개수</th>
                <th>합겨</th>
                <th>실행</th>
              </tr>
            </thead>
            <tbody>
              {order.cartItems.map((cartItem, index) => {
                const { id, name, price, imageURL, cartQuantity } = cartItem;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <p>
                        <b>{name}</b>
                      </p>
                      <Image
                        src={imageURL}
                        alt={name}
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>{priceFormat(price)}원</td>
                    <td>{cartQuantity}</td>
                    <td>{priceFormat(price * cartQuantity)}원</td>
                    <td className={styles.icons}>
                      <Button onClick={() => handleClick(id)}>
                        상품 리뷰하기
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default OrderDetailClient;

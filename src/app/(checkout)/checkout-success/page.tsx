import Heading from "@/components/heading/Heading";
import { NextPage } from "next";
import React from "react";
import checkoutSuccessStyle from "./CheckoutSuccess.css";
import priceFormat from "@/utils/priceFormat";
import { formatTime } from "@/utils/formatTime";
import Button from "@/components/button/Button";
import Link from "next/link";

interface CheckoutSuccessPageProps {
  searchParams: {
    orderId: string;
  };
}

const CheckoutSuccessPage: NextPage<CheckoutSuccessPageProps> = async ({
  searchParams: { orderId },
}) => {
  const secretKey = process.env.NEXT_PUBLIC_TOSS_SECRET_KEY;
  const url = `https://api.tosspayments.com/v1/payments/orders/${orderId}`;
  const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString("base64");

  const payment = await fetch(url, {
    headers: {
      Authorization: `Basic ${basicToken}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  console.log("payment", payment);

  const { card } = payment;

  return (
    <section className={checkoutSuccessStyle.success}>
      <Heading title="결제 성공" />
      <ul className={checkoutSuccessStyle.list}>
        <li>
          <b>결제 상품:</b>
          {payment.orderName}
        </li>
        <li>
          <b>주문 번호:</b>
          {payment.orderId}
        </li>
        <li>
          <b>카드 번호:</b>
          {card.number}
        </li>
        <li>
          <b>결제 금액:</b>
          {priceFormat(card.amount)}원
        </li>
        <li>
          <b>결제승인날짜:</b>{" "}
          {formatTime(payment.approvedAt)}
        </li>
      </ul>
      <Button>
        <Link href="/order-history">주문 상태 보기</Link>
      </Button>
    </section>
  );
};

export default CheckoutSuccessPage;

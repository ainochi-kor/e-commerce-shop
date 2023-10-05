"use client";
import useFetchDocument from "@/hooks/useFetchDocument";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import productDetailsStyle from "./ProductDetailsClient.css";
import Loading from "@/components/loading/Loading";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import Divider from "@/components/divider/Divider";
import priceFormat from "@/utils/priceFormat";
import Button from "@/components/button/Button";
import ProductReviewItem from "@/components/product/productReviewItem/ProductReviewItem";
import useFetchDocuments from "@/hooks/useFetchDocuments";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY } from "@/redux/slice/cartSlice";

const ProductDetailsClient = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { document: product } = useFetchDocument("products", id as string);
  const { documents: reviews } = useFetchDocuments("reviews", [
    "productID",
    "==",
    id as string,
  ]);

  const [count, setCount] = useState(1);

  const addToCart = () => {
    dispatch(ADD_TO_CART({ ...product, quantity: count }));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  const tomorrowDate = tomorrow.getDate();
  const tomorrowMonth = tomorrow.getMonth();

  return (
    <section className={productDetailsStyle.product}>
      {product === null ? (
        <Loading />
      ) : (
        <>
          <div className={productDetailsStyle.details}>
            <div className={productDetailsStyle.img}>
              <Image
                width={477}
                height={410}
                src={product.imageURL}
                alt={product.name}
                priority
              />
            </div>
            <div className={productDetailsStyle.content}>
              <div className={productDetailsStyle.header}>
                <p className={productDetailsStyle.brandName}>
                  {product.brandName}
                </p>
                <p className={productDetailsStyle.productName}>
                  {product.name}
                </p>
                <div className={productDetailsStyle.rating}>
                  <Rating initialValue={3} size={17} />
                  <span className={productDetailsStyle.count}>
                    10,000개 상품평
                  </span>
                </div>
              </div>
              <Divider space={0} />
              <div className={productDetailsStyle.shippingWrapper}>
                <p className={productDetailsStyle.textBold}>무료배송</p>
                <p className={productDetailsStyle.shippingDateText}>
                  내일 {tomorrowMonth}/{tomorrowDate}
                  <span>도착 보장</span>
                </p>
              </div>
              <Divider space={0} />
              <div className={productDetailsStyle.container}>
                <p className={productDetailsStyle.price}>
                  {priceFormat(product.price)}원
                </p>

                <div className={productDetailsStyle.rewardCashBadge}>
                  <Image
                    src={"/images/list-cash-icon.png"}
                    alt="cash-icon"
                    width={12}
                    height={12}
                  />
                  <span>최대 {product.price / 10}원 적립</span>
                </div>
              </div>

              <Divider space={0} />

              <div className={productDetailsStyle.rewardCashWrapper}>
                <div className={productDetailsStyle.rewardSummary}>
                  <Image
                    src={"/images/list-cash-icon.png"}
                    alt="cash-icon"
                    width={15}
                    height={15}
                  />
                  <p>
                    캐시적립 혜택<span>|</span> 최대{" "}
                    <strong>{product.price / 10}</strong>원 적립
                  </p>
                </div>

                <div className={productDetailsStyle.rewardCashPromotion}>
                  <p> 쿠페이 머니 결제 시 1% 적립</p>
                  <p>[로켓와우 + 쿠페이 계좌이체] 결제 시 2% 적립</p>
                  <p>[로켓와우 + 쿠페이 머니] 결제 시 4% 추가적립</p>
                  <button>로켓와우 무료체험 신청하기</button>
                </div>
              </div>

              <Divider space={0} />
              <div className={productDetailsStyle.bottom}>
                <p className={"price"}>{product.price * count}원</p>
                <div className={"count"}>
                  <Button
                    onClick={() => setCount((prev) => prev - 1)}
                    disabled={count > 1 ? false : true}
                    secondary
                  >
                    -
                  </Button>
                  <p>{count}</p>
                  <Button
                    secondary
                    onClick={() => setCount((prev) => prev + 1)}
                  >
                    +
                  </Button>

                  <Button onClick={() => addToCart()}>장바구니 담기</Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={productDetailsStyle.card2}>
        <h3>상품평 ({reviews.length})</h3>
        <div>
          {reviews.length === 0 ? (
            <p className={productDetailsStyle.noReviewText}>
              해당 상품에 대한 상품평이 아직 없습니다.
            </p>
          ) : (
            <>
              {reviews.map(({ id, rate, review, reviewDate, userName }) => {
                return (
                  <ProductReviewItem
                    key={id}
                    rate={rate}
                    review={review}
                    reviewDate={reviewDate}
                    userName={userName}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsClient;

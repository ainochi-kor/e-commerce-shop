import React from "react";
import { Rating } from "react-simple-star-rating";
import productReviewItemStyle from "./ProductReviewItem.css";
import { formatTime } from "@/utils/formatTime";

interface ProductReviewItemProps {
  rate: number;
  review: string;
  reviewDate: string;
  userName: string;
}

const ProductReviewItem: React.FC<ProductReviewItemProps> = ({
  rate,
  review,
  reviewDate,
  userName,
}) => {
  return (
    <div className={productReviewItemStyle.review}>
      <p className={productReviewItemStyle.writer}>
        {userName} <span>님의 상품평</span>
      </p>
      <Rating initialValue={rate} readonly size={25} />
      <p className={productReviewItemStyle.content}>{review}</p>
      <p className={productReviewItemStyle.date}>{formatTime(reviewDate)}</p>
    </div>
  );
};

export default ProductReviewItem;

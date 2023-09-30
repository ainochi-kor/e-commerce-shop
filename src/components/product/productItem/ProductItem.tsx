import Image from "next/image";
import Link from "next/link";
import React from "react";
import productItemStyle from "./ProductItem.css";
import priceFormat from "@/utils/priceFormat";
import { Rating } from "react-simple-star-rating";
import { Product } from "@/types/products.type";
import useFetchDocuments from "@/hooks/useFetchDocuments";

const ProductItem: React.FC<Product> = ({
  id,
  name,
  price,
  imageURL,
  category,
  brand,
}) => {
  const { documents } = useFetchDocuments("reviews", [
    "productID",
    "==",
    id ?? "",
  ]);

  const productRating = documents.reduce((sum, doc) => {
    return sum + doc.rate;
  }, 0);

  const rating = productRating / documents.length;

  const shortenText = (text: string, n: number) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  return (
    <div className={productItemStyle.grid}>
      <Link href={`/product-details/${id}`}>
        <div className={productItemStyle.img}>
          <Image src={imageURL} alt={name} width={265} height={265} />
        </div>
      </Link>
      <div className={productItemStyle.content}>
        <div className={productItemStyle.details}>
          <p>{shortenText(name, 10)}</p>
          <em>
            <strong style={{ color: "#cb1400" }}>{priceFormat(price)}</strong>원{" "}
            <Image
              src={"/images/badge-rocket.svg"}
              alt="로켓배송"
              width={54}
              height={14}
            />
          </em>
          <div className={productItemStyle.rating}>
            <Rating
              size={17}
              readonly
              initialValue={Number.isNaN(rating) ? 0 : rating}
            />
            <span className={productItemStyle.ratingCount}>
              ({documents.length})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

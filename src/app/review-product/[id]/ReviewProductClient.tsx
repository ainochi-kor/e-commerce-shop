import { db } from "@/firebase/firebase";
import useFetchDocument from "@/hooks/useFetchDocument";
import { selectUserID, selectUserName } from "@/redux/slice/authSlice";
import { Product } from "@/types/products.type";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styles from "./ReviewProductClient.css";
import Heading from "@/components/heading/Heading";
import Loading from "@/components/loading/Loading";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import Button from "@/components/button/Button";

const ReviewProductClient: React.FC = () => {
  const router = useRouter();

  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");

  const { id } = useParams();
  const userID = useSelector(selectUserID);
  const userName = useSelector(selectUserName);

  const { document: product } = useFetchDocument("products", id as string) as {
    document: Product | null;
  };

  const submitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submit review

    const today = new Date();
    const date = today.toDateString();

    const reviewData = {
      userID,
      userName,
      productID: id,
      rate,
      review,
      reviewDate: date,
      createAt: Timestamp.now().toDate(),
    };

    try {
      addDoc(collection(db, "reviews"), reviewData);
      router.push(`/product-details/${id}`);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <section className={styles.review}>
      <Heading title="상품평 작성하기" />
      {product === null ? (
        <Loading basic />
      ) : (
        <div>
          <p>
            <b>상품 이름:</b> {product.name}
          </p>
          <Image
            src={product.imageURL}
            alt={product.name}
            width={100}
            height={100}
          />
        </div>
      )}
      <div className={styles.card}>
        <form onSubmit={submitReview}>
          <label>평점: </label>
          <Rating initialValue={rate} onClick={(rate) => setRate(rate)} />
          <label>상품평: </label>
          <textarea
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            cols={30}
            rows={10}
          ></textarea>
          <Button>상품평 작성하기</Button>
        </form>
      </div>
    </section>
  );
};

export default ReviewProductClient;

"use client";

import Heading from "@/components/heading/Heading";
import Loading from "@/components/loading/Loading";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import style from "./AddProductClient.css";
import Button from "@/components/button/Button";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { Product } from "@/types/products.type";

const _categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
  { id: 5, name: "Movies & Television" },
  { id: 6, name: "Home & Kitchen" },
  { id: 7, name: "Automotive" },
  { id: 8, name: "Software" },
  { id: 9, name: "Video Games" },
  { id: 10, name: "Sports & Outdoor" },
  { id: 11, name: "Toys & Games" },
  { id: 12, name: "Industrial & Scientific" },
];

const initalState = {
  name: "",
  imageURL: "",
  price: 0,
  category: "",
  brand: "",
  desc: "",
};

const AddProductClient: React.FC = () => {
  const [product, setProduct] = useState({ ...initalState });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmitAddProduct = (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const addData: Product = {
        name: product.name,
        imageURL: product.imageURL,
        price: Number(product.price),
        category: product.category,
        brand: product.brand,
        desc: product.desc,
        createdAt: Timestamp.now().toDate(),
      };

      addDoc(collection(db, "products"), addData);
      setUploadProgress(0);
      setProduct({ ...initalState });
      toast.success("상품을 저장했습니다.");
      router.push("/admin/all-products");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      () => {
        setIsLoading(false);
      };
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files) {
      return;
    }

    const file = files[0];
    const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downladURL) => {
          setProduct({ ...product, imageURL: downladURL });
          toast.success("이미지를 성공적으로 업로드했습니다.");
        });
      }
    );
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className={style.product}>
        <Heading title="새 상품 생성하기" />
        <form onSubmit={handleSubmitAddProduct}>
          <label>상품 이름:</label>
          <input
            type="text"
            placeholder="상품 이름"
            required
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />

          <div>
            {uploadProgress === 0 ? null : (
              <div className={style.progress}>
                <div
                  className={style["progress-bar"]}
                  style={{
                    width: `${uploadProgress}%`,
                  }}
                >
                  {uploadProgress < 100
                    ? `Uploading... ${uploadProgress}`
                    : `Upload Compleate ${uploadProgress}`}
                </div>
              </div>
            )}
            <input
              type="file"
              placeholder="상품 이미지"
              accept="image/*"
              name="image"
              required
              onChange={handleImageChange}
            />
            {product.imageURL === "" ? null : (
              <input
                type="text"
                name="imageURL"
                disabled
                value={product.imageURL}
                required
                placeholder="이미지 URL"
              />
            )}
          </div>
          <label>상품 가격:</label>
          <input
            type="number"
            placeholder="상품 가격"
            required
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
          <label>상품 카테고리:</label>
          <select
            required
            name="category"
            value={product.category}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              --상품 카테고리 선택
            </option>
            {_categories.map((category) => (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <label>상품 브랜드/회사:</label>
          <input
            type="text"
            placeholder="상품 브랜드/회사"
            required
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
          />
          <label>상품 설명:</label>
          <textarea
            name="desc"
            value={product.desc}
            cols={10}
            rows={10}
            required
            onChange={handleInputChange}
          ></textarea>
          <Button type="submit">상품 생성</Button>
        </form>
      </div>
    </>
  );
};

export default AddProductClient;

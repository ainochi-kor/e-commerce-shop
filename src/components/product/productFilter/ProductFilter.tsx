import { FILTER_BY } from "@/redux/slice/filterSlice";
import {
  selectMaxPrice,
  selectMinPrice,
  selectProducts,
} from "@/redux/slice/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productFilterStyle from "./ProductFilter.css";
import Button from "@/components/button/Button";
import priceFormat from "@/utils/priceFormat";

const ProductFilter: React.FC = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(10000);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterCategories = (category: string) => {
    setCategory(category);
  };

  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY({ products, price, category, brand }));
  }, [dispatch, products, price, category, brand]);

  const clearFilters = () => {
    setCategory("All");
    setBrand("All");
    if (maxPrice) {
      setPrice(maxPrice);
    }
  };

  return (
    <div className={productFilterStyle.filter}>
      <h4>카테고리</h4>
      <div className={productFilterStyle.category}>
        {allCategories.map((categoryItem) => {
          return (
            <button
              key={categoryItem}
              type="button"
              className={
                `${category}` === categoryItem
                  ? `${productFilterStyle.active}`
                  : ""
              }
              onClick={() => filterCategories(categoryItem)}
            >
              &#8250; {categoryItem}
            </button>
          );
        })}
      </div>

      <h4>브랜드</h4>
      <div className={productFilterStyle.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {allBrands.map((brand) => {
            return (
              <option value={brand} key={brand}>
                {brand}
              </option>
            );
          })}
        </select>
      </div>

      <h4>가격</h4>
      <p>{priceFormat(Number(price))}원</p>
      <div className={productFilterStyle.price}>
        <input
          type="range"
          value={price}
          onChange={(e) => setPrice(e.target.valueAsNumber)}
          min={minPrice ?? 0}
          max={maxPrice ?? 0}
        />
      </div>

      <br />
      <Button onClick={clearFilters}>필터 초기화</Button>
    </div>
  );
};

export default ProductFilter;

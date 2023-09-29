import Link from "next/link";
import React, { useEffect, useState } from "react";
import innerHeaderStyle from "./InnerHeader.css";
import Image from "next/image";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const InnerHeader: React.FC = () => {
  const router = useRouter();
  // const dispatch = useDispatch();
  //dispatching actions
  const [search, setSearch] = useState("");

  const products = ""; // useSelector(selectProducts);
  const cartTotalQuantity = ""; // useSelector(selectCartTotalQuantity);

  // useEffect(() => {
  //    dispatch(FILTER_BY_SEARCH({ products, search }));
  // }, [dispatch, products, search]);

  const handleClick = () => {
    router.push("/cart");
  };
  return (
    <div className={innerHeaderStyle.innerHeader}>
      {/* <!-- 로고 --> */}
      <h1 className={innerHeaderStyle.brand}>
        <Link href="/">
          <Image
            src={"/images/colorful.svg"}
            alt="logo"
            width={211}
            height={48}
            priority
          />
        </Link>
      </h1>
      {/* <!-- 카테로기버튼 --> */}
      <button type="button" className={innerHeaderStyle.buttonCategory}>
        카테고리
      </button>
      {/* <!-- 검색 폼  --> */}
      <form action="/" className={innerHeaderStyle.searchForm}>
        <fieldset>
          <div className={innerHeaderStyle.searchFormWrapper}>
            <div className={innerHeaderStyle.formSelect}>
              <select name="searchCategory" id="searchCategory">
                <option>전체</option>
              </select>
              <svg
                className={innerHeaderStyle.iconDown}
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0H0L4.69565 6L9 0Z" fill="#767676" />
              </svg>
            </div>
            <div className={innerHeaderStyle.formInput}>
              <input
                type="search"
                id="searchKeyword"
                placeholder="찾고 싶은 상품을 검색해보세요!"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              type="button"
              className={innerHeaderStyle.searchButton}
            ></button>
            <button
              type="button"
              className={innerHeaderStyle.voiceSearchButton}
            ></button>
          </div>
        </fieldset>
      </form>
      {/* <!-- 마이쿠팡영역 --> */}
      <div className={innerHeaderStyle.myCoupang}>
        <button
          type="button"
          className={classNames(
            innerHeaderStyle.button,
            innerHeaderStyle.myCoupangButton
          )}
        >
          마이쿠팡
        </button>
        <ul className={innerHeaderStyle.myCoupangList}>
          <li>
            <Link href="/">주문목록</Link>
          </li>
          <li>
            <Link href="/">취소/반품</Link>
          </li>
          <li>
            <Link href="/">찜리스트</Link>
          </li>
        </ul>
      </div>
      {/* <!-- 장바구니 영역 --> */}
      <div className={innerHeaderStyle.cart}>
        <div className={innerHeaderStyle.cartButtonWrapper}>
          <button
            type="button"
            onClick={handleClick}
            className={classNames(
              innerHeaderStyle.button,
              innerHeaderStyle.cartButton
            )}
          >
            장바구니
          </button>
          <strong className={innerHeaderStyle.cartProductCount}>
            {cartTotalQuantity}
          </strong>
        </div>
      </div>
      {/* <!-- 유형별 링크목록 --> */}
      <div className={innerHeaderStyle.typeNavigation}>
        <ul className={innerHeaderStyle.typeNavigationList}>
          <li>
            <Link href="/">
              <Image
                src={"/images/icon-rocket.svg"}
                className={innerHeaderStyle.badgeRocket}
                alt="rocket"
                width={14}
                height={14}
              />
              로켓배송
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src={"/images/icon-fresh.svg"}
                className={innerHeaderStyle.badgeRocket}
                alt="fresh"
                width={14}
                height={14}
              />
              로켓프레시
            </Link>
          </li>
          <li>
            <Link href="/">
              2022년 설날
              <Image
                src={"/images/new.svg"}
                alt="new"
                className={innerHeaderStyle.badgeNew}
                width={12}
                height={12}
              />
            </Link>
          </li>
          <li>
            <Link href="/">로켓직구</Link>
          </li>
          <li>
            <Link href="/">골든박스</Link>
          </li>
          <li>
            <Link href="/">정기배송</Link>
          </li>
          <li>
            <Link href="/">이벤트/쿠폰</Link>
          </li>
          <li>
            <Link href="/">기획전</Link>
          </li>
          <li>
            <Link href="/">여행티켓</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InnerHeader;

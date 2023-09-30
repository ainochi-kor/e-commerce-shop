"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import headerStyle from "./Header.css";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { usePathname, useRouter } from "next/navigation";
import InnerHeader from "../innderHeader/InnerHeader";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "@/redux/slice/authSlice";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState("");

  const handleClickLogoutUser = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        toast.success("로그아웃 되었습니다.");
        router.push("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let userName = "";
      if (user) {
        if (user.displayName === null) {
          const ul = user.email?.split("@")[0];
          if (ul) {
            const uName = ul.charAt(0).toUpperCase() + ul.slice(1);
            setDisplayName(uName);
            userName = uName;
          }
        } else {
          setDisplayName(user.displayName);
          userName = user.displayName;
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch]);

  if (["/login", "/register", "/reset"].includes(pathname)) {
    return null;
  }

  return (
    <header>
      <div className={headerStyle.loginBar}>
        <ul className={headerStyle.list}>
          <li className={headerStyle.item}>
            <Link href="/login">로그인</Link>
          </li>
          <li className={headerStyle.item}>
            <Link href="/admin/dashboard">관리자</Link>
          </li>
          <li className={headerStyle.item}>
            <Link href="/order-history">주문 목록</Link>
          </li>
          <li className={headerStyle.item}>
            <Link href="/" onClick={handleClickLogoutUser}>
              로그아웃
            </Link>
          </li>
          <li className={headerStyle.item}>
            <Link href="/order-history">제휴 마케팅</Link>
          </li>
          <li className={headerStyle.item}>
            <Link href="/order-history">쿠팡 플레이</Link>
          </li>
          <li className={headerStyle.item}>
            <Link href="/order-history">고객 센터</Link>
          </li>
        </ul>
      </div>
      {pathname.startsWith("/admin") ? null : <InnerHeader />}
    </header>
  );
};

export default Header;

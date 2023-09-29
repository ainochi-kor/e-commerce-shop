"use client";
import Loading from "@/components/loading/Loading";
import React, { ButtonHTMLAttributes, FormEvent, useState } from "react";
import resetStyle from "./ResetClient.css";
import Heading from "@/components/heading/Heading";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Link from "next/link";

const ResetClient: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loading />}
      <section className={resetStyle.page}>
        <div className={resetStyle.container}>
          <div className={resetStyle.form}>
            <Heading
              title="비밀번호 업데이트"
              subtitle="이메일 주소를 입력해주세요."
            />
            <form onSubmit={resetPassword}>
              <Input
                type="text"
                placeholder="Email"
                required
                value={email}
                className={resetStyle.control}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <Button type="submit">업데이트</Button>
              </div>
              <div className={resetStyle.links}>
                <p>
                  <Link href="/login">- 로그인</Link>
                </p>
                <p>
                  <Link href="/login">- 회원가입</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetClient;

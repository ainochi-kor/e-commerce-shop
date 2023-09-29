"use client";
import Loading from "@/components/loading/Loading";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import loginClientStyle from "../login/loginClient.css";
import Image from "next/image";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Link from "next/link";
import Divider from "@/components/divider/Divider";

const RegisterClient: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmitRegisterUser = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loading />}
      <section className={loginClientStyle.page}>
        <div>
          <h1 className={loginClientStyle.header}>
            <Image
              src={"/images/colorful.svg"}
              alt="logo"
              width={246}
              height={56}
            />
          </h1>
          <form
            className={loginClientStyle.form}
            onSubmit={handleSubmitRegisterUser}
          >
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={loginClientStyle.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={loginClientStyle.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className={loginClientStyle.control}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div>
              <Button type="submit" width="100%">
                회원가입
              </Button>
              <Divider />

              <Link href={"/login"}>
                <Button secondary width={"100%"}>
                  로그인
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterClient;

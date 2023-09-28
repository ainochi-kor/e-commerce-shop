"use client";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Loading from "@/components/loading/Loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { loginClientStylePage } from "./loginClient.css";

const LoginClient: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const handleClickRedirectUser = () => {
    router.push("/");
  };

  const handleSubmitLoginUser = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogleLogin = () => {};

  return (
    <>
      {<Loading />}
      <section className={loginClientStylePage}>
        <div>
          <h1>
            <Image
              src={"/images/colorful.svg"}
              alt="logo"
              width={246}
              height={56}
            />
          </h1>
          <form onSubmit={handleSubmitLoginUser}>
            <Input />
            <div>자동 로그인, 비밀번호 수정</div>
            <div>
              <Button />
              <div>
                <Button />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;

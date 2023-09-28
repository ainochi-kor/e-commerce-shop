"use client";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Loading from "@/components/loading/Loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import loginClientStyle from "./loginClient.css";
import AutoSignInCheckbox from "@/components/autoSignInCheckbox/AutoSignInCheckbox";
import Divider from "@/components/divider/Divider";

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
      {isLoading && <Loading />}
      <section className={loginClientStyle.page}>
        <div>
          <h1>
            <Image
              src={"/images/colorful.svg"}
              alt="logo"
              width={246}
              height={56}
            />
          </h1>
          <form
            className={loginClientStyle.form}
            onSubmit={handleSubmitLoginUser}
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
            <div>
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => setIsAutoLogin(e.target.checked)}
              />
            </div>
            <div>
              <Button />
              <Divider />
              <Button />
              <Divider />

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

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
import Link from "next/link";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";

const LoginClient: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push("/");
  };

  const handleSubmitLoginUser = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("로그인에 성공했습니다.");
        redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const signInWithGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("로그인에 성공했습니다.");
        redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
            <div className={loginClientStyle.group}>
              <AutoSignInCheckbox
                checked={isAutoLogin}
                onChange={(e) => setIsAutoLogin(e.target.checked)}
              />
              <Link href={"/reset"} className={loginClientStyle.findLink}>
                비밀번호 수정하기
                <Image
                  src={"images/arrow.svg"}
                  alt="비밀번호 수정하기로 이동"
                  width={11}
                  height={18}
                  className={loginClientStyle.findLinkArrow}
                />
              </Link>
            </div>
            <div>
              <Button type="submit" width="100%">
                로그인
              </Button>
              <Divider />

              <Link href={"/register"}>
                <Button secondary width="100%">
                  회원가입
                </Button>
              </Link>
              <Divider />

              <div>
                <Button onClick={signInWithGoogleLogin}>구글 로그인</Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginClient;

import Image from "next/image";
import React from "react";

export type IconType = "letter" | "lock" | "show" | "hide";

interface IconProps {
  type?: IconType;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ type, alt = "", ...restProps }) => {
  const src = type ? `images/icon/shape=${type}.svg` : "";

  if (!src) {
    throw new Error("지원하는 아이콘 타입이 존재하지 않습니다.");
  }

  return <Image src={src} alt={alt} width={45} height={50} {...restProps} />;
};

export default Icon;

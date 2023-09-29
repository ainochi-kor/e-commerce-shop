import classNames from "classnames";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import buttonStyle from "./Bytton.css";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number | string;
  secondary?: boolean;
  bgColor?: string;
  fgColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  ...restProps
}) => {
  const composeClasses = classNames(
    buttonStyle.button,
    secondary ? buttonStyle.secondary : buttonStyle.primary
  );

  const style = {
    backgroundColor: bgColor || "",
    color: fgColor || "",
    width: width || "",
  };

  return (
    <button
      className={composeClasses}
      type={type}
      style={style}
      {...restProps}
    />
  );
};

export default Button;

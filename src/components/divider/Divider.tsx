import classNames from "classnames";
import React from "react";
import dividerStyle from "./divider.css";

interface DividerProps {
  space?: number;
  color?: string;
}

const Divider: React.FC<DividerProps> = ({
  space = 22,
  color = "#ccc",
  ...restProps
}) => {
  return (
    <div
      role="presentation"
      style={{
        marginTop: space,
        marginBottom: space,
        background: color,
      }}
      className={dividerStyle.line}
      {...restProps}
    />
  );
};

export default Divider;

import classNames from "classnames";
import React from "react";
import tooltipStyle from "./Tooltip.css";

export type Orientation = "top" | "right" | "bottom" | "left";

interface TooltipProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
  bgColor?: string;
  orientation: Orientation;
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  color = "",
  bgColor = "",
  orientation = "top",
  message,
  ...restProps
}) => {
  const setOrientationClass = (type: Orientation) => {
    switch (type) {
      case "top":
        return tooltipStyle.orientationTop;
      case "right":
        return tooltipStyle.orientationRight;
      case "bottom":
        return tooltipStyle.orientationBottom;
      case "left":
        return tooltipStyle.orientationLeft;
      default:
        break;
    }
  };

  return (
    <span
      role="tooltip"
      style={{
        top,
        left,
        bottom,
        right,
        color,
        backgroundColor: bgColor,
      }}
      className={classNames(
        tooltipStyle.tooltip,
        setOrientationClass(orientation)
      )}
      {...restProps}
    >
      Tooltip
    </span>
  );
};

export default Tooltip;

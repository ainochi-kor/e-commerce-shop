import { boxShadow, colors } from "@/styles/utils";
import { style } from "@vanilla-extract/css";

const buttonStyle = {
  button: style({
    cursor: "pointer",
    boxSizing: "border-box",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    border: 0,
    padding: "0.7rem 3rem",
    boxShadow,

    ":disabled": {
      cursor: "not-allowed",
    },
  }),
  secondary: style({
    background: colors.white,
    color: colors.primary,
    ":disabled": {
      background: colors["dark-gray"],
      color: colors["light-gray"],
    },
  }),
  primary: style({
    background: colors.primary,
    color: colors.white,
    ":disabled": {
      background: colors["light-gray"],
      color: colors["dark-gray"],
    },
  }),
};

export default buttonStyle;

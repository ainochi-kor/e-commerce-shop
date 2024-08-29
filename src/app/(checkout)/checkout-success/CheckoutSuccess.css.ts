import { globalStyle, style } from "@vanilla-extract/css";

const checkoutSuccessStyle = {
  success: style({
    width: "1020px",
    margin: "3rem auto",
  }),
  list: style({
    padding: "1rem",
  }),
};

globalStyle(`${checkoutSuccessStyle.list} > li`, {
  fontSize: "1.3rem",
  marginBottom: "1rem",
});

export default checkoutSuccessStyle;

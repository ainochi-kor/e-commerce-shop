import { style } from "@vanilla-extract/css";

const productStyle = {
  product: style({
    maxWidth: "1500px",
    margin: "0 auto",
    padding: "20px 20px",
    display: "flex",
    position: "relative",
  }),
  filter: style({
    width: "20%",
    transition: "all 0.3s",
  }),
  content: style({
    width: "1400px",
    paddingLeft: "5px",
    position: "relative",
  }),
};

export default productStyle;

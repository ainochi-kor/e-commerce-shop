import { boxShadow, colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const productItemStyle = {
  grid: style({
    width: "24rem",
    backgroundColor: colors.white,
    margin: "5px",
    height: "32rem",
    position: "relative",
    transition: "box-shadow 0.2s ease",

    ":hover": {
      boxShadow: boxShadow,
    },
  }),
  img: style({
    padding: "1rem",
    width: "100%",
    maxHeight: "75%",
    overflow: "hidden",
  }),
  content: style({
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
  }),
  details: style({
    padding: "0 1rem",
  }),
  ratingCount: style({
    color: "#888888",
  }),
  rating: style({
    marginBottom: "10px",
  }),
};

globalStyle(`${productItemStyle.grid}:hover > p`, {
  textDecoration: "underline",
  color: colors.primary,
});
globalStyle(`${productItemStyle.img} > img`, {
  cursor: "pointer",
});
globalStyle(`${productItemStyle.content} p`, {
  width: "100%",
  maxHeight: "48px",
  lineHeight: "16px",
  fontSize: "1.5rem",
  paddingBottom: "1rem",
});
globalStyle(`${productItemStyle.content} em`, {
  display: "block",
  paddingBottom: "1rem",
  lineHeight: "20px",
  fontSize: "16px",
  fontWeight: "700",
  color: "#cb1400",
  fontStyle: "normal",
});

globalStyle(`${productItemStyle.content} em strong`, {
  fontWeight: "bold",
});

export default productItemStyle;

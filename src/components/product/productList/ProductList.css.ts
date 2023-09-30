import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const productListStyle = {
  productList: style({
    width: "100%",
  }),
  top: style({
    height: "32px",
    marginBottom: "15px",
    backgroundColor: "#fafafa",
    width: "100%",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  sort: style({
    display: "flex",
    listStyle: "none",
  }),
  selected: style({
    ":before": {
      backgroundImage: "url(/images/blue-check.svg)",
      backgroundSize: "10px",
      overflow: "hidden",
      content: " ",
      float: "left",
      display: "block",
      width: "10px",
      height: "10px",
      marginTop: "5px",
    },
  }),
  limit: style({}),
  grid: style({
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#ffffff",
  }),
};

globalStyle(`${productListStyle.top} label`, {
  fontSize: "1.4rem",
  fontWeight: "300",
  margin: "0 5px",
  cursor: "pointer",
});

globalStyle(`${productListStyle.sort} input[type="radio"]`, {
  position: "absolute",
  visibility: "hidden",
  width: "0",
  height: "0",
  margin: "0",
  padding: "0",
});

globalStyle(`${productListStyle.selected} label`, {
  color: colors.primary,
  fontWeight: "bold",
});
globalStyle(`${productListStyle.limit} > select`, {
  backgroundColor: "#fafafa",
  fontSize: "1.4rem",
  fontWeight: "400",
  border: "none",
  outline: "none",
});

export default productListStyle;

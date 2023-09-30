import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const productFilterStyle = {
  filter: style({}),
  category: style({}),
  brand: style({}),
  price: style({}),
  active: style({
    position: "relative",
    paddingLeft: "1rem",
    ":before": {
      content: "",
      position: "absolute",
      left: "0",
      bottom: "0",
      height: "100%",
      backgroundColor: colors.primary,
      width: "2px",
    },
  }),
};

globalStyle(`${productFilterStyle.filter}  h4`, {
  fontSize: "1.6rem",
  marginTop: "1rem",
  marginBottom: "5px",
});

globalStyle(`${productFilterStyle.category} button`, {
  display: "block",
  textAlign: "left",
  width: "80%",
  height: "3rem",
  fontSize: "1.5rem",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderBottom: `1px solid ${colors["dark-gray"]}`,
  whiteSpace: "nowrap",
});

globalStyle(`${productFilterStyle.brand} select`, {
  fontSize: "1.6rem",
  fontWeight: "300",
  padding: "5px",
  width: "80%",
  border: `1px solid ${colors["dark-gray"]}`,
  borderRadius: "3px",
  outline: "none",
});

export default productFilterStyle;

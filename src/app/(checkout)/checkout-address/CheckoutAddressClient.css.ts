import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const checkoutAddressStyle = {
  checkout: style({
    width: 1020,
    margin: "3rem auto",
  }),
  card: style({
    width: "100%",
    padding: "1rem",
  }),
  postalCode: style({}),
};

globalStyle(`${checkoutAddressStyle.card} h3`, {
  fontWeight: "bold",
  fontSize: "1.4rem",
  margin: "1rem 0",
});

globalStyle(`${checkoutAddressStyle.checkout} form`, {
  width: "100%",
  display: "flex",
});

globalStyle(`${checkoutAddressStyle.checkout} form label`, {
  display: "block",
  fontSize: "1.4rem",
  fontWeight: "500",
});

globalStyle(`${checkoutAddressStyle.checkout} form input[type="text"]`, {
  display: "block",
  fontSize: "1.6rem",
  fontWeight: "300",
  padding: "1rem",
  margin: "1rem auto",
  width: "100%",
  border: `1px solid ${colors["border-gray"]}`,
  borderRadius: "3px",
  outline: "none",
});

export default checkoutAddressStyle;

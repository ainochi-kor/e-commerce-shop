import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const addProductStyle = {
  product: style({}),
  input: style({
    display: "block",
    fontSize: "1.6rem",
    fontWeight: 300,
    padding: "1rem",
    margin: "1rem auto",
    width: "100%",
    border: `1px solid ${colors["border-gray"]}`,
    borderRadius: 3,
    outline: "none",
  }),
  progress: style({
    backgroundColor: "#aaa",
    border: "1px solid transparent",
    borderRadius: "10px",
  }),
  "progress-bar": style({
    backgroundColor: colors["light-blue"],
    border: "1px solid transparent",
    borderRadius: "10px",
    color: colors.white,
    fontSize: "1.2rem",
    fontWeight: "500",
    padding: "0 1rem",
  }),
};

export default addProductStyle;

globalStyle(`${addProductStyle.product} > form > label`, {
  display: "block",
  fontSize: "1.4rem",
  fontWeight: 500,
});

globalStyle(`${addProductStyle.product} > form > input, select, textarea`, {
  display: "block",
  fontSize: "1.6rem",
  fontWeight: 300,
  padding: "1rem",
  margin: "1rem auto",
  width: "100%",
  border: `1px solid ${colors["border-gray"]}`,
  borderRadius: 3,
  outline: "none",
});

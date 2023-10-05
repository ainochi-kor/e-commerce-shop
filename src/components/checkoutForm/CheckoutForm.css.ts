import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const checkoutFormStyle = {
  summary: style({}),
  text: style({
    display: "flex",
    padding: "5px 0",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.5rem",
  }),
  card: style({
    width: "100%",
    maxWidth: "500px",
    padding: "1rem",
    border: `1px solid ${colors["light-blue"]}`,
    marginBottom: "5px",
    fontSize: "1.3rem",
  }),
};

globalStyle(`${checkoutFormStyle.summary} h3`, {
  fontSize: "1.7rem",
  marginBottom: "1rem",
});

export default checkoutFormStyle
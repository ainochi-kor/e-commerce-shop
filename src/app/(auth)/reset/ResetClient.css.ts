import { boxShadow } from "@/styles/utils";
import { style } from "@vanilla-extract/css";

const resetStyle = {
  page: style({
    height: "100vh",
    display: "grid",
    placeItems: "center",
  }),
  container: style({}),
  form: style({
    display: "flex",
    flexFlow: "column",
    border: "1px solid #ccc",
    padding: "2rem",
    boxShadow: boxShadow,
  }),
  control: style({
    marginBottom: 20,
  }),
  links: style({
    marginTop: 10,
    fontSize: "1.3rem",
    lineHeight: "2rem",
  }),
};

export default resetStyle;

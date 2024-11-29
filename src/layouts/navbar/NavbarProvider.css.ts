import { style } from "@vanilla-extract/css";

const styles = {
  admin: style({
    display: "flex",
  }),
  navbar: style({
    width: "25%",
    minHeight: "80vh",
  }),
  content: style({
    width: "75%",
    padding: "1rem",
  }),
};

export default styles;

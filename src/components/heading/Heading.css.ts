import { style } from "@vanilla-extract/css";

const headingStyle = {
  wrapper: style({
    padding: "1rem 0",
  }),
  center: style({
    textAlign: "center",
  }),
  title: style({
    fontSize: "3rem",
    fontWeight: "bold",
  }),
  subtitle: style({
    marginTop: "1rem",
    fontSize: "1.6rem",
  }),
};

export default headingStyle;

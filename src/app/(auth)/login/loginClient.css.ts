import { colors } from "@/styles/utils";
import { style } from "@vanilla-extract/css";

const loginClientStyle = {
  page: style({
    height: "100vh",
    display: "grid",
    placeItems: "center",
  }),
  container: style({
    width: 576,
  }),
  logo: style({
    textAlign: "center",
    marginBottom: 50,
  }),
  form: style({
    display: "flex",
    flexFlow: "column",
    width: "100%",
    maxWidth: 578,
  }),
  control: style({
    marginBottom: 20,
  }),
  group: style({
    display: "flex",
    justifyContent: "space-between",
    marginTop: 2,
  }),
  findLink: style({
    color: colors.primary,
    textDecoration: "none",
    fontSize: "1.4rem",
  }),
  findLinkArrow: style({
    marginLeft: 6,
    verticalAlign: -3,
  }),
  buttonGroup: style({
    margin: "2rem 0",
  }),
};

export default loginClientStyle;

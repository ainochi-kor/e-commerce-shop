import { colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const loginClientStylePage = style({
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export const loginClientStyleContainer = style({
  width: 576,
});

export const loginClientStyleLogo = style({
  textAlign: "center",
  marginBottom: 50,
});

export const loginClientStyleForm = style({
  display: "flex",
  flexFlow: "column",
  width: "100%",
  maxWidth: 578,
});

export const loginClientStyleControl = style({
  marginBottom: 20,
});

export const loginClientStyleGroup = style({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 2,
});

export const loginClientStyleFindLink = style({
  color: colors.primary,
  textDecoration: "none",
  fontSize: "1.4rem",
});

export const loginClientStyleFindLinkArrow = style({
  marginLeft: 6,
  verticalAlign: -3,
});

export const loginClientStyleButtonGroup = style({
  margin: "2rem 0",
});

// const loginClientStyle = {
//   page: style({
//     height: "100vh",
//     display: "grid",
//     placeItems: "center",
//   }),
//   container: style({
//     width: 576,
//   }),
//   logo: style({
//     textAlign: "center",
//     marginBottom: 50,
//   }),
//   form: style({
//     display: "flex",
//     flexFlow: "column",
//     width: "100%",
//     maxWidth: 578,
//   }),
//   control: style({
//     marginBottom: 20,
//   }),
//   group: style({
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: 2,
//   }),
//   findLink: style({
//     color: vars.color.primary,
//     textDecoration: "none",
//     fontSize: "1.4rem",
//   }),
//   findLinkArrow: style({
//     marginLeft: 6,
//     verticalAlign: -3,
//   }),
//   buttonGroup: style({
//     margin: "2rem 0",
//   }),
// };

// export default loginClientStyle;

import { style } from "@vanilla-extract/css";

const loadingStyle = {
  basicWrapper: style({
    width: "100%",
    height: "100%",
    minHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  wrapper: style({
    position: "fixed",
    width: "100%",
    height: "100vh",
    zIndex: 999,
  }),
  loader: style({
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 999,
  }),
};

export default loadingStyle;

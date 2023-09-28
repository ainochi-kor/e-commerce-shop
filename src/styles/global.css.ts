import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  scrollBehavior: "smooth",
});

globalStyle("html", {
  fontSize: 12,
});

globalStyle("body", {
  fontFamily: "sans-serif",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

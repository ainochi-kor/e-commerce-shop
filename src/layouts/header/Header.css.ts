import { globalStyle, style } from "@vanilla-extract/css";

const headerStyle = {
  loginBar: style({
    background: "#f3f3f3",
  }),
  list: style({
    width: "102rem",
    margin: "0 auto",
    display: "flex",
    flexFlow: "row nowrap",
    listStyle: "none",
    padding: ".5rem .4rem",
  }),
  item: style({
    ":first-child": {
      marginLeft: "auto",
    },
    selectors: {
      "&:nth-child(n+4)": {
        order: -1,
      },
    },
  }),
};

globalStyle(`${headerStyle.item} > a`, {
  textDecoration: "none",
  color: "black",
  display: "block",
  padding: "8px 6.4px",
  fontSize: "1.2rem",
  lineHeight: 1.2,
});

export default headerStyle;

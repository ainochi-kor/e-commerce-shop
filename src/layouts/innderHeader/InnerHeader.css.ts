import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const innerHeaderStyle = {
  innerHeader: style({
    width: "102rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
    gridTemplateColumns: "auto 24.6rem 1fr auto auto",
    gridTemplateRows: "7.4rem 4.2rem",
    gridTemplateAreas: `"buttonCategory brand searchForm myCoupang cart" "buttonCategory typeNavigation typeNavigation myCoupang cart"`,
  }),
  brand: style({
    gridArea: "brand",
    marginTop: "0",
    marginBottom: "0",
    alignSelf: "end",
    paddingLeft: "4rem",
    paddingRight: "3rem",
  }),
  buttonCategory: style({
    gridArea: "buttonCategory",
    border: "0",
    padding: "4.2rem 0 0 0",
    fontSize: "1.2rem",
    lineHeight: "1.2",
    color: colors.white,
    width: "11rem",
    height: "11.6rem",
    background: `${colors.primary} url(/public/images/hamburger.svg) no-repeat 50% 3rem`,
  }),
  searchForm: style({
    gridArea: "searchForm",
    alignSelf: "end",
  }),
  searchFormWrapper: style({
    height: "4rem",
    border: `2px solid ${colors.primary}`,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  }),
  formSelect: style({
    position: "relative",
    height: "100%",
    borderRight: `1px solid ${colors["light-gray"]}`,
  }),
  iconDown: style({
    position: "absolute",
    right: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  }),
  formInput: style({
    flexGrow: "1",
    height: "100%",
  }),
  searchButton: style({
    border: "0",
    padding: "0",
    width: "3rem",
    height: "3rem",
    marginRight: "1rem",
    order: 1,
    background:
      "-moz-initialurl('/public/images/search.svg') no-repeat 50% 50%",
  }),
  voiceSearchButton: style({
    border: "0",
    padding: "0",
    width: "3rem",
    height: "3rem",
    marginRight: "1rem",
    background: "-moz-initialurl('/public/images/mic.svg') no-repeat 50% 50%",
  }),
  myCoupang: style({
    position: "relative",
    gridArea: "myCoupang",
    marginLeft: "0.6rem",
    fontSize: "1.2rem",
    lineHeight: "1.2",
    alignSelf: "center",
  }),
  button: style({
    border: "0",
    cursor: "pointer",
    userSelect: "none",
    color: "inherit",
    backgroundColor: "transparent",
  }),
  myCoupangButton: style({
    width: "5rem",
    height: "6rem",
    background:
      "transparent url(/public/images/my-coupang.svg) no-repeat 50% 0.5rem",
    padding: "3rem 0 0 0",
  }),
  myCoupangList: style({
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    listStyle: "none",
    paddingLeft: "0",
    margin: "0",
    backgroundColor: colors.white,
    display: "none",
    flexFlow: "column nowrap",
    border: `1px solid ${colors["light-gray"]}`,
    padding: "2rem 1.6rem",

    ":before": {
      content: "",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderBottom: `8px solid ${colors["light-gray"]}`,
      top: "-0.9rem",
    },
    ":after": {
      content: "",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      borderLeft: "4px solid transparent",
      borderRight: "4px solid transparent",
      borderBottom: `8px solid ${colors["white"]}`,
      top: "-0.8rem",
    },
  }),
  cart: style({
    gridArea: "cart",
    alignSelf: "center",
    fontSize: "1.2rem",
    lineHeight: "1.2",
    marginLeft: "0.6rem",
    position: "relative",
  }),
  cartButtonWrapper: style({
    position: "relative",
  }),
  cartButton: style({
    width: "5rem",
    height: "6rem",
    padding: "3rem 0 0 0",
    background: "url(/public/images/cart.svg) no-repeat 50% 0.5rem",
  }),
  cartProductCount: style({
    position: "absolute",
    top: "0",
    right: "0",
    background: colors.primary,
    color: colors.white,
    width: "1.8rem",
    height: "1.8rem",
    borderRadius: "50%",
    textAlign: "center",
  }),
  typeNavigation: style({
    gridArea: "typeNavigation",
    alignSelf: "center",
  }),
  typeNavigationList: style({
    listStyle: "none",
    paddingLeft: "0",
    margin: "0 0 0 3.6rem",
    fontSize: "0",
  }),
  badgeRocket: style({
    marginLeft: "0.4rem",
  }),
  badgeNew: style({
    marginLeft: "0.4rem",
  }),
};

globalStyle(`${innerHeaderStyle.searchForm} > fieldset`, {
  margin: 0,
  border: 0,
  padding: 0,
});

globalStyle(`${innerHeaderStyle.formSelect} > select`, {
  appearance: "none",
  border: "0",
  width: "13.5rem",
  height: "100%",
  fontSize: "1.2rem",
  lineHeight: "1.2",
  color: colors["dark-gray"],
  paddingLeft: "1.2rem",
});

globalStyle(`${innerHeaderStyle.formInput} > input`, {
  border: "0",
  width: "100%",
  height: "100%",
  padding: "1rem 1rem 1.3rem",
});

globalStyle(`${innerHeaderStyle.formInput} > input::placeholder`, {
  fontSize: "1.2rem",
  lineHeight: "1.2",
  color: colors["dark-gray"],
});

globalStyle(`${innerHeaderStyle.myCoupangList} > li`, {
  margin: ".2rem 0",
});

globalStyle(`${innerHeaderStyle.myCoupangList} > li > a`, {
  whiteSpace: "nowrap",
  display: "block",
  padding: "0.4rem",
});

globalStyle(`${innerHeaderStyle.typeNavigationList} > li`, {
  display: "inline-block",
  marginLeft: "0.2rem",
});

globalStyle(`${innerHeaderStyle.typeNavigationList} > li:first-child`, {
  marginLeft: 0,
});

globalStyle(`${innerHeaderStyle.typeNavigationList} > li > a`, {
  fontSize: "1.2rem",
  lineHeight: "1.2",
  display: "inline-block",
  padding: "0.6rem 1.4rem",
});

export default innerHeaderStyle;

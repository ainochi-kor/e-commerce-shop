import { colors } from "@/styles/utils";
import {
  globalFontFace,
  globalKeyframes,
  globalStyle,
  style,
} from "@vanilla-extract/css";

const footerStyle = {
  footer: style({
    color: colors["dark-gray"],
  }),
  customerGuide: style({
    background: colors["light-gray"],
  }),
  customerGuideList: style({
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
    listStyle: "none",
    height: "4rem",
    paddingLeft: 0,
    margin: 0,
  }),
  coupangInformation: style({
    width: "120rem",
    margin: "3.2rem auto",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
  }),
  coupangInformationList: style({
    listStyle: "none",
    paddingLeft: "0",
    marginTop: "0",
    marginBottom: "0",
  }),
  customerCenter: style({}),
  customerCenterList: style({
    display: "flex",
    flexFlow: "row nowrap",
    listStyle: "none",
    paddingLeft: "0",
    marginTop: "0",
    marginBottom: "0",
  }),
  customerCenterItem: style({
    ":first-child": {
      fontWeight: 700,
    },
  }),
  customerCenterTelephone: style({
    fontSize: "4.8rem",
    lineHeight: "1.2",
    fontWeight: "700",
    marginTop: "0.8rem",
    marginBottom: "1.2rem",
  }),
  customerCenterAddress: style({
    lineHeight: "1.2",
    marginTop: "0.8rem",
  }),
  customerCenterEmail: style({
    lineHeight: "1.2",
    marginTop: "0.8rem",
  }),
  paymentGuarantee: style({
    width: "28.2rem",
    lineHeight: 1.2,
  }),
  paymentGuaranteeTitle: style({
    fontWeight: 700,
    marginBottom: "0.8rem",
  }),
  copyrightArea: style({
    background: colors["dark-gray"],
  }),
  copyrightAreaInner: style({
    width: "102rem",
    padding: "1.6rem 0",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "flex-end",
    justifyContent: "space-between",
  }),
  copyright: style({
    color: colors["light-gray"],
    lineHeight: "1.2",
    fontSize: "1.2rem",
    fontWeight: "300",
    display: "flex",
    flexFlow: "column nowrap",
  }),
  copyrightText: style({
    font: "inherit",
  }),
  snsList: style({
    listStyle: "none",
    paddingLeft: "auto",
    marginTop: "0",
    marginLeft: "0",
    marginBottom: "0",
    display: "flex",
    flexFlow: "row nowrap",
    gap: "1rem",
  }),
  logo: style({}),
  sns: style({}),
  divider: style({
    display: "inline-block",
    margin: "0 1rem 0 1.4rem",
  }),
};

globalStyle(`${footerStyle.customerGuideList} > li`, {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
});

globalStyle(`${footerStyle.customerGuideList} > li > span`, {
  display: "inline-block",
  width: "0.1rem",
  height: "1.2rem",
});

globalStyle(`${footerStyle.customerGuideList} > li > a`, {
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
});

globalStyle(`${footerStyle.coupangInformationList} > li:not(:first-child)`, {
  lineHeight: 1.2,
  marginTop: "1.2rem",
});

export default footerStyle;

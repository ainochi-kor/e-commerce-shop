import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const productDetailsStyle = {
  product: style({
    width: 1050,
    margin: "0 auto",
  }),
  details: style({
    paddingTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
  }),
  img: style({
    width: 479,
    height: "100%",
    border: `1px solid ${colors["border-gray"]}`,
  }),
  content: style({
    width: 479,
    padding: "0 5px",
  }),
  header: style({
    paddingBottom: 10,
  }),
  brandName: style({
    fontSize: 12,
    color: "#346aff",
    display: "inline-block",
    marginBottom: 3,
  }),
  productName: style({
    fontSize: 18,
    fontWeight: "bold",
    width: 380,
    marginBottom: 3,
  }),
  rating: style({
    display: "flex",
  }),
  count: style({
    fontSize: "1.2rem",
    marginLeft: 5,
    color: "#346aff !important",
  }),
  shippingWrapper: style({
    padding: "1rem 0",
  }),
  textBold: style({
    fontWeight: "bold",
    fontSize: "1.3rem",
  }),
  shippingDateText: style({
    fontWeight: "bold",
    color: "#00891a",
    fontSize: "1.5rem",
  }),
  container: style({
    padding: "1rem 0",
  }),
  price: style({
    color: "#cb1400",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "21px",
  }),
  rewardCashBadge: style({
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    boxSizing: "border-box",
    padding: "0 8px",
    height: "20px",
    borderRadius: "10px",
    border: `solid 1px ${colors["border-gray"]}`,
    backgroundColor: colors.white,
    width: "118px",
  }),
  rewardCashWrapper: style({
    padding: "1rem 0",
  }),
  rewardSummary: style({
    display: "flex",
    alignItems: "center",
  }),
  rewardCashPromotion: style({
    margin: "1.5rem 0",
    padding: "15px",
    borderRadius: "1px",
    border: `solid 1px ${colors["border-gray"]}`,
    backgroundColor: "#fafafa",
    fontSize: "14px",
    color: "#555",
    lineHeight: "2",
  }),
  descWrapper: style({
    padding: "1rem 0",
    fontSize: "1.3rem",
  }),
  bottom: style({
    padding: "1rem 0",
  }),
  card: style({
    color: "#cb1400",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "21px",
    marginBottom: "10px",
  }),
  card2: style({
    padding: "1rem 0",
    margin: "2rem 0",
  }),
  noReviewText: style({
    margin: "2rem 0",
    fontSize: "1.3rem",
  }),
};

globalStyle(`${productDetailsStyle.img} img`, {
  width: "100%",
});

globalStyle(`${productDetailsStyle.rewardCashBadge} > span`, {
  marginLeft: 3,
  fontSize: 12,
});

globalStyle(`${productDetailsStyle.shippingDateText} > span`, {
  fontWeight: "500",
  fontSize: "1.1rem",
  marginLeft: "3px",
});

globalStyle(`${productDetailsStyle.rewardSummary} > p`, {
  marginLeft: "4px",
  fontSize: "1.3rem",
});

globalStyle(`${productDetailsStyle.rewardSummary} > span`, {
  fontSize: "1rem",
  padding: "0 2px",
  color: colors["border-gray"],
});

globalStyle(`${productDetailsStyle.rewardCashWrapper} button`, {
  height: "36px",
  marginTop: "8px",
  padding: "0 12px",
  borderRadius: "2px",
  border: "solid 1px #346aff",
  backgroundColor: colors.white,
  fontSize: "14px",
  color: "#346aff",
  outline: "0",
});

globalStyle(`${productDetailsStyle.bottom} > .price`, {
  color: "#cb1400",
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "21px",
  marginBottom: "10px",
});

globalStyle(`${productDetailsStyle.bottom} > .count`, {
  display: "flex",
  alignItems: "center",
});

globalStyle(`${productDetailsStyle.bottom} > .count p `, {
  fontSize: "1.5rem",
  fontWeight: "700",
});

globalStyle(`${productDetailsStyle.bottom} > .count * `, {
  marginRight: "1.5rem",
});

globalStyle(`${productDetailsStyle.card2} > h3 `, {
  fontSize: "1.5rem",
});

export default productDetailsStyle;

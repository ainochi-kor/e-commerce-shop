import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const productReviewItemStyle = {
  review: style({
    padding: "2rem 0",
    lineHeight: "2.3rem",
  }),
  writer: style({
    fontSize: "1.5rem",
  }),
  content: style({
    fontSize: "1.7rem",
  }),
  date: style({
    fontSize: "1.3rem",
    color: colors["dark-gray"],
  }),
};

globalStyle(`${productReviewItemStyle.writer} > span`, {
  fontSize: "1.2rem",
  color: colors["dark-gray"],
});

export default productReviewItemStyle;

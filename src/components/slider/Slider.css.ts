import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const sliderStyle = {
  slider: style({
    width: "100%",
    height: "50vh",
    position: "relative",
    overflow: "hidden",
    backgroundColor: colors["dark-gray"],
  }),
  slide: style({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    opacity: "0",
    transform: "translate(-50%)",
    transition: "all 0.5s ease",
  }),
  current: style({
    opacity: 1,
    transform: "translateX(0)",
  }),
  content: style({
    opacity: 1,
  }),
  arrow: style({
    border: `2px solid ${colors.primary}`,
    borderRadius: "50%",
    background: "transparent",
    color: colors.white,
    width: "2.5rem",
    height: "2.5rem",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "2",
    ":hover": {
      background: colors.white,
    },
  }),
  prev: style({
    right: "1.5rem",
    color: colors.primary,
  }),
  next: style({
    left: "1.5rem",
    color: colors.primary,
  }),
};

globalStyle(`${sliderStyle.slide} > img`, {
  height: "100%",
  objectFit: "cover",
});

export default sliderStyle;

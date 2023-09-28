import { style } from "@vanilla-extract/css";

const tooltipStyle = {
  orientationTop: style({
    ":before": {
      top: -10,
      borderRightColor: "transparent !important",
      borderLeftColor: "transparent !important",
      borderTopColor: "transparent !important",
    },
  }),
  orientationRight: style({
    ":before": {
      right: -10,
      borderBottomColor: "transparent !important",
      borderRightColor: "transparent !important",
      borderTopColor: "transparent !important",
    },
  }),
  orientationBottom: style({
    ":before": {
      bottom: -10,
      borderRightColor: "transparent !important",
      borderLeftColor: "transparent !important",
      borderBottomColor: "transparent !important",
    },
  }),
  orientationLeft: style({
    ":before": {
      left: -10,
      borderTopColor: "transparent",
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
    },
  }),
  tooltip: style({
    position: "absolute",
    minWidth: 225,
    padding: "0.5em 0.75em",
    fontSize: 10,
    borderRadius: 2,
    background: "hsl(0,0%,96%)",
    color: "#555555",
    height: "100%",

    ":before": {
      position: "absolute",
      content: "",
      border: "5px solid #f4f4f4",
    },
  }),
};

export default tooltipStyle;

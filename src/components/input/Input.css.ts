import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const inputStyle = {
  formControl: style({
    display: "inline-flex",
    flexDirection: "column",
  }),
  inputWrapper: style({
    position: "relative",
    display: "inline-flex",
    minWidth: 296,
    border: `1px soild ${colors["border-gray"]}`,
  }),
  inputWrapperError: style({
    position: "relative",
    border: `1px soild ${colors["red"]}`,
  }),
  label: style({
    display: "inline-block",
    marginBottom: "4px",
    color: "#24292E",
    fontSize: 13,
  }),
  labelHidden: style({
    position: "absolute",
    clipPath: "circle(0)",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
  }),
  input: style({
    flex: 1,
    border: `1px solid ${colors["border-gray"]}`,
    padding: "0.875rem",
    background: colors.white,
    "::placeholder": {
      color: colors["dark-gray"],
    },
    ":read-only": {
      color: colors["dark-gray"],
    },
    ":disabled": {
      color: colors["dark-gray"],
      cursor: "not-allowed",
    },
  }),
  button: style({
    cursor: "pointer",
    padding: 0,
    border: 0,

    ":disabled": {
      cursor: "not-allowed",
    },
  }),
  error: style({
    color: colors.red,
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  }),
};

globalStyle(`${inputStyle.button} img`, {
  verticalAlign: "bottom",
});

export default inputStyle;

import { colors } from "@/styles/utils";
import { style } from "@vanilla-extract/css";

const dividerStyle = {
  line: style({
    height: 1,
    backgroundColor: colors["border-gray"],
  }),
};

export default dividerStyle;

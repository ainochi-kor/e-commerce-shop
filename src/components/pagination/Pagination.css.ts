import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const paginationStyle = {
  pagination: style({
    listStyle: "none",
    marginTop: "1rem",
    paddingTop: "1rem",
    borderTop: `2px solid ${colors["border-gray"]}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  hidden: style({
    display: "none",
  }),
  active: style({
    border: `1px solid ${colors.primary}`,
    color: colors.primary,
  }),
};

globalStyle(`${paginationStyle.pagination} > li`, {
  fontSize: "1.4rem",
  border: `1px solid ${colors["border-gray"]}`,
  minWidth: "3rem",
  height: "3rem",
  padding: "3px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  margin: "0 4px",
});

globalStyle(`${paginationStyle.pagination} > p`, {
  marginLeft: "1rem",
});

globalStyle(`${paginationStyle.pagination} > p > .page`, {
  color: colors.primary,
});

export default paginationStyle;

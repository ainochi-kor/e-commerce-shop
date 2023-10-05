import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const cartStyle = {
  table: style({
    width: 1020,
    margin: "3rem auto",
    minHeight: "44.6vh",
  }),
  emptyText: style({
    fontSize: "2rem",
    paddingBottom: "3rem",
  }),
  count: style({
    display: "flex",
    alignItems: "center",
  }),
  icons: style({
    border: `1px solid ${colors["table-border-gray"]}`,
    verticalAlign: "top",
    textAlign: "left",
    padding: "8px",
  }),
  summary: style({
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  }),
  checkout: style({}),
  text: style({
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "2.5rem",
  }),
};

globalStyle(`${cartStyle.table} table`, {
  borderCollapse: "collapse",
  width: "100%",
  fontSize: "1.4rem",
});

globalStyle(`${cartStyle.table} table > thead`, {
  borderTop: `2px solid ${colors["light-blue"]}`,
  borderBottom: `2px solid ${colors["light-blue"]}`,
});

globalStyle(`${cartStyle.table} table > th`, {
  border: `1px solid ${colors["table-border-gray"]}`,
});

globalStyle(`${cartStyle.table} table > th`, {
  border: `1px solid ${colors["table-border-gray"]}`,
  verticalAlign: "top",
  textAlign: "left",
  padding: "8px",
});

globalStyle(`${cartStyle.table} table > td`, {
  border: `1px solid ${colors["table-border-gray"]}`,
  verticalAlign: "top",
  textAlign: "left",
  padding: "8px",
});

globalStyle(`${cartStyle.table} table > tr`, {
  border: `1px solid ${colors["border-gray"]}`,
});

globalStyle(`${cartStyle.table} table > tr:nth-child(even)`, {
  backgroundColor: colors["table-border-gray"],
});

globalStyle(`${cartStyle.text} h4`, {
  fontSize: "1.3rem",
});

globalStyle(`${cartStyle.text} p`, {
  fontSize: "1.2rem",
});

globalStyle(`${cartStyle.count} button`, {
  border: `1px solid ${colors["border-gray"]}`,
});

globalStyle(`${cartStyle.count} > *`, {
  marginRight: "1rem",
});

export default cartStyle;

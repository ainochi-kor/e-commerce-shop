import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";

const orderDetailsStyles = {
  details: style({fontSize: "1.5rem", padding: "1rem 0"}),
  table: style({ width: 1020, margin: "3rem auto", minHeight: "44.6vh" }),
  icons: style({}),
  delivered: style({}),
};

globalStyle(`${orderDetailsStyles.table} p`, {
  fontSize: "1.3rem",
});

globalStyle(`${orderDetailsStyles.table} table`, {
  borderCollapse: "collapse",
  width: "100%",
  fontSize: "1.4rem",
});

globalStyle(`${orderDetailsStyles.table} table > thead`, {
  borderTop: `2px solid ${colors["light-blue"]}`,
  borderBottom: `2px solid ${colors["light-blue"]}`,
});

globalStyle(`${orderDetailsStyles.table} table > th`, {
  border: `1px solid ${colors["table-border-gray"]}`,
});

globalStyle(`${orderDetailsStyles.table} table > th`, {
  border: `1px solid ${colors["table-border-gray"]}`,
  verticalAlign: "top",
  textAlign: "left",
  padding: "8px",
});

globalStyle(`${orderDetailsStyles.table} table > td`, {
  border: `1px solid ${colors["table-border-gray"]}`,
  verticalAlign: "top",
  textAlign: "left",
  padding: "8px",
});

globalStyle(`${orderDetailsStyles.table} table > tr`, {
  border: `1px solid ${colors["border-gray"]}`,
  cursor: "pointer",
});

globalStyle(`${orderDetailsStyles.table} table > tr:nth-child(even)`, {
  backgroundColor: colors["table-border-gray"],
});

export default orderDetailsStyles;

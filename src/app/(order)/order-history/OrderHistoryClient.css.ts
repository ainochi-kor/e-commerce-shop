import { colors } from "@/styles/utils";
import { globalStyle, style } from "@vanilla-extract/css";
import { table } from "console";

const orderHistoryStyles = {
  order: style({
    width: "1020px",
    margin: "3rem auto",
    minHeight: "44.6vh",
  }),
  table: style({
    width: 1020,
    margin: "3rem auto",
    minHeight: "44.6vh",
  }),
  pending: style({
    color: "#4385F4",
    fontWeight: "500",
  }),
  delivered: style({
    color: "green",
    fontWeight: "500",
  }),
};

globalStyle(`${orderHistoryStyles.table} table`, {
  borderCollapse: "collapse",
  width: "100%",
  fontSize: "1.4rem",
});

globalStyle(`${orderHistoryStyles.table} table > thead`, {
  borderTop: `2px solid ${colors["light-blue"]}`,
  borderBottom: `2px solid ${colors["light-blue"]}`,
});

globalStyle(`${orderHistoryStyles.table} table > th`, {
  border: `1px solid ${colors["table-border-gray"]}`,
});

globalStyle(`${orderHistoryStyles.table} table > th`, {
  border: `1px solid ${colors["table-border-gray"]}`,
  verticalAlign: "top",
  textAlign: "left",
  padding: "8px",
});

globalStyle(`${orderHistoryStyles.table} table > td`, {
  border: `1px solid ${colors["table-border-gray"]}`,
  verticalAlign: "top",
  textAlign: "left",
  padding: "8px",
});

globalStyle(`${orderHistoryStyles.table} table > tr`, {
  border: `1px solid ${colors["border-gray"]}`,
  cursor: "pointer",
});

globalStyle(`${orderHistoryStyles.table} table > tr:nth-child(even)`, {
  backgroundColor: colors["table-border-gray"],
});

export default orderHistoryStyles;

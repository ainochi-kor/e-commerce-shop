import { globalStyle, style } from "@vanilla-extract/css";

const styles = {
  navbar: style({
    borderRight: "1px solid var(--border-gray)",
    minHeight: "80vh",
    height: "100%",
  }),
  active: style({
    color: "var(--color-primary)",
  }),
  user: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "4rem",
    backgroundColor: "var(--light-blue)",
  }),
};

globalStyle(`${styles.navbar} h4`, {
  textTransform: "capitalize",
  marginTop: "1rem",
  fontSize: "1.7rem",
  color: "var(--color-white)",
});

globalStyle(`${styles.navbar} li`, {
  borderBottom: "1px solid var(--border-gray)",
  padding: "1rem",
  position: "relative",
});

globalStyle(`${styles.navbar} a`, {
  fontSize: "1.5rem",
  display: "block",
  width: "100%",
});

export default styles;

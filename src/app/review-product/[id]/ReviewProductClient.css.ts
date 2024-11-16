import { globalStyle, style } from "@vanilla-extract/css";

const styles = {
  review: style({
    width: "1020px",
    margin: "3rem auto",
    minHeight: "44.6vh",
  }),
  name: style({
    marginBottom: "5px",
    fontSize: "1.4rem",
    fontWeight: "medium",
  }),
  card: style({
    width: "100%",
    maxWidth: "500px",
  }),
};

globalStyle(`${styles.name} p`, {
  fontSize: "1.5rem",
  marginRight: "3px",
});

globalStyle(`${styles.review} form`, {
  lineHeight: "2rem",
});

globalStyle(`${styles.review} form label`, {
  display: "block",
  fontSize: "1.4rem",
  fontWeight: "medium",
});

globalStyle(`${styles.review} form textarea`, {
  display: "block",
  fontSize: "1.6rem",
  fontWeight: "300",
  padding: "1rem",
  margin: "1rem auto",
  width: "100%",
  border: "1px solid var(--border-gray)",
  borderRadius: "3px",
  outline: "none",
});

export default styles;

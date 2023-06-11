import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "grid",
    gap: "15px",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "stretch",
    alignItems: "stretch",
    marginTop: "10px",
  },
  title: {
    "@media (max-width: 768px)": {
      fontSize: "0.75rem",
    },
  },
  list: {
    backgroundColor: "#383838",
    borderRadius: "8px",
    width: "100%",
    height: "auto",
    overflow: "hidden",
  },
  itemContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  itemLight: {
    backgroundColor: "#686868",
    padding: "0.35rem 0.45rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: "#FFFFFF",
  },
  itemDark: {
    backgroundColor: "#464646",
    padding: "0.35rem 0.45rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: "#FFFFFF",
  },
  selectedLight: {
    backgroundColor: "#686868",
    padding: "0.35rem 0.45rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: "#FFFFFF",
  },
  selectedDark: {
    backgroundColor: "#464646",
    padding: "0.35rem 0.45rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    color: "#FFFFFF",
    "&:hover": {
      opacity: 0.8,
    },
  },
  text: {
    fontSize: "0.9rem",
    "@media (max-width: 768px)": {
      fontSize: "0.7rem",
    },
  },
  content: {
    width: "auto",
    height: "auto",
    margin: "0 0.5rem",
  },
  img: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: "3rem",
    "@media (max-width: 768px)": {
      height: "1.5rem",
    },
  },
  button: {
    backgroundColor: "#008000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.25rem",
    color: "#FFFFFF",
    borderRadius: "50%",
    border: "none",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#016701",
    },
  },
});

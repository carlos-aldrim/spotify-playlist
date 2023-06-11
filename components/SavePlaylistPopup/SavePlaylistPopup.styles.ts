import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  drawer: {
    opacity: 0.9,
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  popup: {
    color: "#FFFFFF",
    backgroundColor: "#212121",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    height: "auto",
    minHeight: "50%",
    width: "50%",
    padding: "1rem",
  },
  title: {
    fontSize: "2.5rem",
    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  },
  button: {
    backgroundColor: "#B00101",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#880101",
    },
  },
});

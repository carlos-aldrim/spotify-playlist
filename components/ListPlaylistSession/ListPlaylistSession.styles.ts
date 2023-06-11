import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    margin: "10px",
    width: "70vw",
    minHeight: "30vh",
    borderRadius: "18px",
    display: "flex",
    padding: "16px",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: "1rem",
    "@media (max-width: 768px)": {
      fontSize: "0.7rem",
    },
  },
});

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    height: "auto",
  },
  text: {
    fontSize: "0.9rem",
    marginTop: "2rem",
    "@media (max-width: 768px)": {
      fontSize: "0.7rem",
    },
  },
});

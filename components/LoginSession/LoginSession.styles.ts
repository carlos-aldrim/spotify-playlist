import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "30vw",
    minWidth: "250px",
    minHeight: "auto",
    borderRadius: "18px",
    display: "flex",
    padding: "30px 20px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  },
  spotifyIcon: {
    maxHeight: "30px",
    filter: "invert(1)",
    marginRight: "5px",
  },
});

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  spotifyIcon: {
    maxHeight: "30px",
    marginRight: "5px",
    "@media (max-width: 768px)": {
      maxHeight: "18px",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: "2rem",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "max-content",
    margin: "0 1.5rem",
  },
  pages: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: "0.9rem",
    margin: "0 1.5rem",
    fontWeight: 600,
    "&:hover": {
      borderBottom: "2px solid",
      borderColor: "currentColor",
      transition: "all",
    },
    "@media (max-width: 768px)": {
      fontSize: "0.7rem",
    },
  },
  title: {
    fontSize: "1.2rem",
    minWidth: "max-content",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
    },
  },
});

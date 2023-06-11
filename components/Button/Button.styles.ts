import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "#008000",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "1rem",
    color: "#FFFFFF",
    borderRadius: "5px",
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#016701",
    },
    "&:disabled": {
      cursor: "not-allowed",
    },
    "@media (max-width: 768px)": {
      padding: "0.75rem",
      fontSize: "0.7rem",
    },
  },
  loading: {
    borderColor: "#FFFFFF",
  },
});

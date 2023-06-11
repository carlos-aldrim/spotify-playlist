import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  textInput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: "10px",
  },
  label: {
    fontWeight: 600,
    fontSize: "0.875rem",
    margin: "0 0 0.2rem 0.2rem",
  },
  icon: {
    marginRight: "0.5rem",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    border: "0",
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "8px",
    outline: "none",
    background: "none",
    overflow: "hidden",
  },
  passwordIcon: {
    cursor: "pointer",
  },
  "@media (max-width: 768px)": {
    input: {
      padding: "0.75rem",
      fontSize: "0.7rem",
    },
    label: {
      fontSize: "0.5rem",
    },
  },
});

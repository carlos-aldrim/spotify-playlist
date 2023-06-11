import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  "@keyframes spin": {
    to: {
      transform: "rotate(360deg)",
    },
  },
  loading: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "50%",
    animation: "$spin 1s linear infinite",
    marginRight: "5px",
  },
});

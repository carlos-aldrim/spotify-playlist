import React from "react";
import { useStyles } from "./SpinnerLoading.styles";
import { colors } from "@material-ui/core";
import { useSpotify } from "@/hooks/useSpotify";

interface SpinnerLoadingProps {
  size?: "SMALL" | "MEDIUM" | "LARGE";
  className?: string;
  color?: string;
}

export default function SpinnerLoading({
  size = "SMALL",
  className,
  color
}: SpinnerLoadingProps) {
  const sizeSpinner = {
    SMALL: { width: 20, height: 20 },
    MEDIUM: { width: 30, height: 30 },
    LARGE: { width: 40, height: 40 },
  };
  const { getTheme } = useSpotify();
  const colors = getTheme();
  const styles = useStyles();

  return (
    <div
      className={`${className} ${styles.loading}`}
      style={{
        borderColor: color !== "" ? color : colors.palette.fontColor,
        borderTopColor: "transparent",
        width: sizeSpinner[size].width,
        height: sizeSpinner[size].height,
      }}
    />
  );
}

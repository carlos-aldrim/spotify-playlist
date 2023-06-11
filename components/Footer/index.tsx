import React from "react";
import { useStyles } from "./Footer.styles";
import { useSpotify } from "@/hooks/useSpotify";

export default function Footer() {
  const { getTheme } = useSpotify();
  const colors = getTheme();
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <p style={{color: colors.palette.fontColor}} className={styles.text}>
        &copy; 2023 Carlos Aldrim. Todos os direitos reservados.
      </p>
    </div>
  );
}

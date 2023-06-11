import React from "react";
import { useSpotify } from "@/hooks/useSpotify";
import Button from "../Button";
import { useStyles } from "./LoginSession.styles";

export default function LoginSession() {
  const { loading, onLoginButtonClick, getTheme } = useSpotify();
  const colors = getTheme();
  const styles = useStyles();

  return (
    <div style={{backgroundColor: colors.palette.backgroundPrimary}} className={styles.container}>
      <h1 style={{color: colors.palette.fontColor}} className={styles.title}>Login</h1>
      <Button
        isLoading={loading}
        icon={
          <img
            className={styles.spotifyIcon}
            src="/icon/SpotifyIcon.svg"
            alt=""
          />
        }
        label="Entrar com Spotify"
        onClick={onLoginButtonClick}
      />
    </div>
  );
}

import React from "react";
import { useSpotify } from "@/hooks/useSpotify";
import { useStyles } from "./Header.styles";
import SwitchTheme from "../SwitchTheme";

export default function Header() {
  const { setCurrentStep, getTheme } = useSpotify();
  const colors = getTheme();
  const styles = useStyles();

  return (
    <div style={{color: colors.palette.fontColor}} className={styles.container}>
      <div className={styles.logo}>
        <img
        style={{filter: colors.palette.filterColor}}
          className={styles.spotifyIcon}
          src="/icon/SpotifyIcon.svg"
          alt="logo"
        />
        <h2 className={styles.title}>Playlist Spotify</h2>
      </div>
      <div className={styles.pages}>
        <label className={styles.text} onClick={() => setCurrentStep(0)}>
          Home
        </label>
        <label className={styles.text} onClick={() => setCurrentStep(1)}>
          Playlists
        </label>
        <SwitchTheme/>
      </div>
    </div>
  );
}

import React from "react";
import { useSpotify } from "@/hooks/useSpotify";
import DualList from "../DualList";
import Header from "../Header";
import RenderConditional from "../RenderConditional";
import Footer from "../Footer";
import { useStyles } from "./ListPlaylistSession.styles";

export default function ListPlaylistSession() {
  const {
    selectedPlaylist,
    playlists,
    getTheme
  } = useSpotify();
  const colors = getTheme();
  const styles = useStyles();

  return (
    <div style={{backgroundColor: colors.palette.backgroundPrimary}} className={styles.container}>
      <Header/>
      <RenderConditional condition={playlists.length !== 0}>
        <DualList
          leftLabel="Playlist(s)"
          leftItems={playlists}
          rightItems={selectedPlaylist}
          showPlaylists={true}
        />
      </RenderConditional>
      <RenderConditional condition={playlists.length === 0}>
        <label style={{color: colors.palette.fontColor}} className={styles.text}>Nenhuma playlist encontrada.</label>
      </RenderConditional>
      <Footer/>
    </div>
  );
};

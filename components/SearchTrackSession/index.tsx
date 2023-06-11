import React from "react";
import { useSpotify } from "@/hooks/useSpotify";
import Button from "../Button";
import TextInput from "../TextInput.tsx";
import DualList from "../DualList";
import SavePlaylistPopup from "../SavePlaylistPopup";
import Header from "../Header";
import Footer from "../Footer";
import { useStyles } from "./SearchTrackSession.styles";

export default function SearchTrackSession() {
  const {
    term,
    loading,
    setTerm,
    tracks,
    onSearchButtonClick,
    playlist,
    showPopUp,
    setShowPopUp,
    setNamePlaylist,
    getTheme
  } = useSpotify();
  const colors = getTheme();
  const styles = useStyles();

  const onClickOpenPopUp = () => {
    setNamePlaylist("");
    setShowPopUp(true);
  };

  return (
    <div style={{backgroundColor: colors.palette.backgroundPrimary}} className={styles.container}>
      <Header />
      <TextInput
        label="Música, álbum ou artista"
        placeholder="Digite sua música..."
        onChange={(event) => setTerm(event.target.value)}
        value={term}
      />
      <Button
        isLoading={loading}
        onClick={onSearchButtonClick}
        label="Pesquisar"
        disabled={term === ""}
      />
      <DualList
        leftLabel="Busca"
        rightLabel="Playlist"
        leftItems={tracks}
        rightItems={playlist}
        onCreatePlaylist={onClickOpenPopUp}
        showPlaylists={false}
      />
      <SavePlaylistPopup open={showPopUp} />
      <Footer />
    </div>
  );
}

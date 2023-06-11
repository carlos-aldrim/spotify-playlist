import React from "react";
import TextInput from "../TextInput.tsx";
import { useSpotify } from "@/hooks/useSpotify";
import Button from "../Button";
import { Drawer } from "@material-ui/core";
import { useStyles } from "./SavePlaylistPopup.styles";

interface SavePlaylistPopupProps {
  open: boolean;
};

export default function SavePlaylistPopup({ open }: SavePlaylistPopupProps) {
  const {
    loading,
    onClickCreatePlaylist,
    namePlaylist,
    setNamePlaylist,
    setShowPopUp,
  } = useSpotify();
  const styles = useStyles();

  return (
    <Drawer
      className={styles.drawer}
      anchor="bottom"
      open={open}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <div className={styles.container}>
        <div className={styles.popup}>
          <h1 className={styles.title}>Playlist</h1>
          <TextInput
            label="Nome da playlist"
            placeholder="Digite o nome..."
            onChange={(event) => setNamePlaylist(event.target.value)}
            value={namePlaylist}
          />
          <Button
            isLoading={loading}
            onClick={onClickCreatePlaylist}
            label="Criar Playlist"
            disabled={namePlaylist === ""}
          />
          <Button
            className={styles.button}
            onClick={() => setShowPopUp(false)}
            label="Fechar"
          />
        </div>
      </div>
    </Drawer>
  );
}

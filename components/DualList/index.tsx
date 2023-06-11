import React from "react";
import { useSpotify } from "@/hooks/useSpotify";
import RenderConditional from "../RenderConditional";
import { Add, Remove } from "@mui/icons-material";
import Button from "../Button";
import { useStyles } from "./DualList.styles";

interface DualListProps {
  leftLabel?: string;
  rightLabel?: string;
  leftItems: any[];
  rightItems: any[];
  onCreatePlaylist?: () => void;
  showPlaylists: boolean;
}

export default function DualList({
  leftLabel,
  rightLabel,
  leftItems,
  rightItems,
  onCreatePlaylist,
  showPlaylists,
}: DualListProps) {
  const { onClickAddTrackButton, onClickRemoveTrackButton, onClickSelectedPlaylist, namePlaylist, getTheme } = useSpotify();
  const colors = getTheme();
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <RenderConditional condition={leftItems.length !== 0}>
        <h2 style={{color: colors.palette.fontColor}} className={styles.title}>{leftLabel}:</h2>
        <h2 style={{color: colors.palette.fontColor,}} className={styles.title}>
          {rightLabel
            ? rightLabel + ":"
            : namePlaylist
            ? namePlaylist + ":"
            : ""}
        </h2>
      </RenderConditional>
      <div style={{color: colors.palette.fontColor}} className={styles.list}>
        {showPlaylists === false && (
          <>
            {leftItems.map((item, index) => {
              const trackClass =
                index % 2 === 0 ? styles.itemLight : styles.itemDark;
              return (
                <div key={item.id} className={`${trackClass}`}>
                  <div className={styles.itemContent}>
                    <div className={styles.content}>
                      <img
                        className={styles.img}
                        src={item.album.images[0].url}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className={styles.text}>
                        <strong>{index + 1}.</strong>
                      </p>
                      <p className={styles.text}>
                        <strong>Nome:</strong> {item.name}
                      </p>
                      <p className={styles.text}>
                        <strong>Álbum:</strong> {item.album.name}
                      </p>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <button
                      onClick={() => onClickAddTrackButton(item)}
                      className={styles.button}
                    >
                      <Add fontSize="inherit" />
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {showPlaylists === true && (
          <>
            {leftItems.map((item, index) => {
              const playlistClass =
                index % 2 === 0 ? styles.selectedLight : styles.selectedDark;
              return (
                <div
                  key={item.id}
                  className={`${playlistClass}`}
                  onClick={() => onClickSelectedPlaylist(item)}
                >
                  <div className={styles.itemContent}>
                    <div className={styles.content}>
                      <img
                        className={styles.img}
                        src={item.playlist[0].album.images[0].url}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className={styles.text}>
                        <strong>{index + 1}.</strong>
                      </p>
                      <p className={styles.text}>
                        <strong>Nome:</strong> {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div style={{color: colors.palette.fontColor}} className={styles.list}>
        {showPlaylists === false && (
          <>
            <RenderConditional condition={rightItems.length !== 0}>
              <Button onClick={onCreatePlaylist} label="Criar playlist" />
            </RenderConditional>
            {rightItems.map((item, index) => {
              const trackClass =
                index % 2 === 0 ? styles.itemLight : styles.itemDark;
              return (
                <div key={item.id} className={`${trackClass}`}>
                  <div className={styles.itemContent}>
                    <div className={styles.content}>
                      <img
                        className={styles.img}
                        src={item.album.images[0].url}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className={styles.text}>
                        <strong>{index + 1}.</strong>
                      </p>
                      <p className={styles.text}>
                        <strong>Nome:</strong> {item.name}
                      </p>
                      <p className={styles.text}>
                        <strong>Álbum:</strong> {item.album.name}
                      </p>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <button
                      onClick={() => onClickRemoveTrackButton(item)}
                      className={styles.button}
                    >
                      <Remove fontSize="inherit" />
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
        {showPlaylists === true && (
          <>
            {rightItems.map((item, index) => {
              const trackClass =
                index % 2 === 0 ? styles.itemLight : styles.itemDark;
              return (
                <div key={item.id} className={`${trackClass}`}>
                  <div className={styles.itemContent}>
                    <div className={styles.content}>
                      <img
                        className={styles.img}
                        src={item.album.images[0].url}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className={styles.text}>
                        <strong>{index + 1}.</strong>
                      </p>
                      <p className={styles.text}>
                        <strong>Nome:</strong> {item.name}
                      </p>
                      <p className={styles.text}>
                        <strong>Álbum:</strong> {item.album.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

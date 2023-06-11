import React from "react";
import { SpotifyContext } from "./types";
import { generateCodeChallenge, generateRandomString } from "@/utils/functions";
import { darkTheme, lightTheme } from "@/config/theme";

export interface PlaylistsProps  {
  name: string;
  playlist: any[];
};

export const SpotifyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [accessToken, setAccessToken] = React.useState("");
  const [term, setTerm] = React.useState("");
  const [tracks, setTracks] = React.useState<any[]>([]);
  const [auth, setAuth] = React.useState(false);
  const [playlist, setPlaylist] = React.useState<any[]>([]);
  const [playlists, setPlaylists] = React.useState<PlaylistsProps[]>([]);
  const [showPopUp, setShowPopUp] = React.useState(false);
  const [namePlaylist, setNamePlaylist] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedPlaylist, setSelectedPlaylist] = React.useState<any[]>([]);
  const [userId, setUserId] = React.useState("");
  const [theme, setTheme] = React.useState("dark");

  const getTheme = () => {
    return theme === "light" ? lightTheme : theme === "dark" ? darkTheme : lightTheme;
  };

  const toggleTheme = (theme: string) => {
    setTheme(theme);
    setCurrentStep(currentStep);
  };

  React.useEffect(() => {
    let result = localStorage.getItem("access_token");
    if(result !== "" && result !== null) {
      setAccessToken(result);
    }
  });

  const acessTokenRequest = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");

    let codeVerifier = localStorage.getItem("code_verifier");

    if (!code || !codeVerifier) return;

    let body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:3000/",
      client_id: process.env.CLIENT_ID || "",
      code_verifier: codeVerifier,
    });

    const response = fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        setAuth(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const getProfile = async () => {
      let accessToken = localStorage.getItem("access_token");

      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      return await response.json();
    };

    const getUserData = async () => {
      const result = await getProfile();
      setUserId(result.id);
    };

    getUserData();
  };

  const onLoginButtonClick = () => {
    setLoading(true);

    const client_id = process.env.CLIENT_ID;
    const redirectUri = "http://localhost:3000/";

    let codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      let state = generateRandomString(16);
      let scope = "user-read-private playlist-modify-public";

      localStorage.setItem("code_verifier", codeVerifier);

      let args = new URLSearchParams({
        response_type: "code",
        client_id: client_id || "",
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      window.location.href = "https://accounts.spotify.com/authorize?" + args;
    });
  };

  const onSearchButtonClick = async () => {
    setLoading(true);

    if (term === "" || accessToken === "") {
      setTracks([]);
      setLoading(false);
      return;
    }

    const requestParams = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const result = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      requestParams
    ).then((result) => result.json());

    setTracks(result.tracks.items);

    setLoading(false);
  };

  const onClickAddTrackButton = (track: any) => {
    const trackExists = playlist.find((item) => item.id === track.id);
    
    if (!trackExists) {
      const newPlaylist = [...playlist];
      newPlaylist.push(track);
      setPlaylist(newPlaylist);
    }
  };

  const onClickRemoveTrackButton = (track: any) => {
    const newPlaylist = playlist.filter((item) => item.id !== track.id);
    setPlaylist(newPlaylist);
  };

  const onClickCreatePlaylist = async () => {
    const newPlaylists = [...playlists];
    newPlaylists.push({name: namePlaylist, playlist: playlist});
    setPlaylists(newPlaylists);
    const list = await addPlaylistSpotify();
    console.log(list);
    await addTrackPlaylist(list.id);
    setPlaylist([]);
    setNamePlaylist("");
    setSelectedPlaylist([]);
    setShowPopUp(false);
    setCurrentStep(1);
  };

  const onClickSelectedPlaylist = (item: PlaylistsProps) => {
    setSelectedPlaylist(item.playlist);
    setNamePlaylist(item.name);
  };

  const addPlaylistSpotify = async () => {
    const requestParams = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: namePlaylist }),
    };

    const result = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      requestParams,
    );
  
    return await result.json();
  };

  const addTrackPlaylist = async (playlistId: string) => {
    const tracks = playlist.map((track) => track.uri);

    const requestParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ uris: tracks }),
    };
  
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      requestParams,
    );
  
    return await result.json();
  };

  const values = React.useMemo(
    () => ({
      auth,
      loading,
      term,
      setTerm,
      tracks,
      playlist,
      playlists,
      onSearchButtonClick,
      onLoginButtonClick,
      acessTokenRequest,
      onClickAddTrackButton,
      onClickRemoveTrackButton,
      onClickCreatePlaylist,
      showPopUp,
      setShowPopUp,
      namePlaylist,
      setNamePlaylist,
      currentStep,
      selectedPlaylist,
      onClickSelectedPlaylist,
      setCurrentStep,
      getTheme,
      theme,
      toggleTheme
    }),
    [
      auth,
      loading,
      term,
      setTerm,
      tracks,
      playlist,
      playlists,
      onSearchButtonClick,
      onLoginButtonClick,
      acessTokenRequest,
      onClickAddTrackButton,
      onClickRemoveTrackButton,
      onClickCreatePlaylist,
      showPopUp,
      setShowPopUp,
      namePlaylist,
      setNamePlaylist,
      currentStep,
      selectedPlaylist,
      onClickSelectedPlaylist,
      setCurrentStep,
      getTheme,
      theme,
      toggleTheme
    ]
  );

  return (
    <SpotifyContext.Provider value={values}>{children}</SpotifyContext.Provider>
  );
};

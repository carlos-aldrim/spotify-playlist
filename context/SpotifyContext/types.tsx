import { createContext } from "react";
import { PlaylistsProps } from "./SpotifyProvider";
import { darkTheme, lightTheme } from "@/config/theme";

export type SpotifyContextType = {
	auth: boolean;
	loading: boolean;
	term: string,
	setTerm: React.Dispatch<React.SetStateAction<string>>;
	tracks: any[];
	playlist: any[];
	playlists: any[];
	onLoginButtonClick: () => void;
	acessTokenRequest: () => void;
	onSearchButtonClick: () => void;
	onClickAddTrackButton: (track: any) => void;
	onClickRemoveTrackButton: (track: any) => void;
	onClickCreatePlaylist: () => void;
	showPopUp: boolean;
	setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
	namePlaylist: string;
	setNamePlaylist: React.Dispatch<React.SetStateAction<string>>;
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
	selectedPlaylist: any[];
  onClickSelectedPlaylist: (item: PlaylistsProps) => void;
	theme: "ligth" | "dark" | string;
	getTheme: () => typeof darkTheme | typeof lightTheme;
	toggleTheme: (theme: string) => void;
};

export const SpotifyContext = createContext<SpotifyContextType>(null!);
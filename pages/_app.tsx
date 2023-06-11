import { SpotifyProvider } from "@/context/SpotifyContext";
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpotifyProvider>
      <Component {...pageProps} />
    </SpotifyProvider>
  );
};

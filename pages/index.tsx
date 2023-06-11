import React from "react";
import { useSpotify } from "@/hooks/useSpotify";
import RenderConditional from "@/components/RenderConditional";
import LoginSession from "@/components/LoginSession";
import SearchTrackSession from "@/components/SearchTrackSession";
import ListPlaylistSession from "@/components/ListPlaylistSession";
import SpinnerLoading from "@/components/SpinnerLoading";

export default function Home() {
  const { auth, acessTokenRequest, currentStep, getTheme } = useSpotify();
  const [processing, setProcessing] = React.useState(false);
  const colors = getTheme();

  React.useEffect(() => {
    acessTokenRequest();
    setProcessing(true);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors.palette.backgroundMain,
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RenderConditional condition={processing === true}>
        <RenderConditional condition={auth === false}>
          <LoginSession />
        </RenderConditional>
        <RenderConditional condition={auth === true && currentStep === 0}>
          <SearchTrackSession />
        </RenderConditional>
        <RenderConditional condition={auth === true && currentStep === 1}>
          <ListPlaylistSession />
        </RenderConditional>
      </RenderConditional>
      <RenderConditional condition={processing === false}>
        <SpinnerLoading size="LARGE" />
      </RenderConditional>
    </div>
  );
}

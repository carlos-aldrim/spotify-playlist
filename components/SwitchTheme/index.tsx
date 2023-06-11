import React from "react";
import { useSpotify } from "@/hooks/useSpotify";
import { Switch } from "@material-ui/core";

export default function SwitchTheme() {
  const { theme, toggleTheme} = useSpotify();

  return (
    <Switch
      color="default"
      defaultChecked={theme === "light" ? true : false}
      onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
    />
  );
}

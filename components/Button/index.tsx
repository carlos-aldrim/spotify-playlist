import React from "react";
import RenderConditional from "../RenderConditional";
import SpinnerLoading from "../SpinnerLoading";
import { useSpotify } from "@/hooks/useSpotify";
import { useStyles } from "./Button.styles";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  label,
  icon,
  isLoading,
  onClick,
  className,
  disabled,
}: ButtonProps) {
  const styles = useStyles();

  return (
    <button
      className={`${styles.container} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <RenderConditional condition={!!isLoading}>
        <SpinnerLoading color="#FFFFFF" className={styles.loading} size="MEDIUM" />
      </RenderConditional>

      <RenderConditional condition={!!!isLoading && !!icon}>
        {icon}
      </RenderConditional>
      {label}
    </button>
  );
}

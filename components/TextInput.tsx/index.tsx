import React from "react";
import { useStyles } from "./TextInput.styles";
import { useSpotify } from "@/hooks/useSpotify";

export interface TextInputProps {
  value?: string;
  name?: string;
  label?: string;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
  error?: string;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

export default function TextInput({
  value,
  name,
  label,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  error,
  placeholder,
  type = "text",
  onChange,
  autoFocus,
}: TextInputProps) {
  const { getTheme } = useSpotify();
  let colors = getTheme();
  const styles = useStyles();

  return (
    <div className={styles.textInput}>
      <label
        style={{ color: colors.palette.input.labelColor }}
        className={styles.label}
      >
        {label}
      </label>
      <div className={styles.icon} onClick={onClickLeftIcon}>
        {leftIcon}
      </div>
      <input
        style={{
          backgroundColor: colors.palette.input.backgroundColor,
          color: colors.palette.input.fontColor,
        }}
        className={styles.input}
        value={value}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={type}
        onChange={onChange}
      />
      <div className={styles.icon} onClick={onClickRightIcon}>
        {rightIcon}
      </div>
    </div>
  );
}

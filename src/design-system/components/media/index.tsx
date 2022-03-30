import MuiAvatar from "@mui/material/Avatar";
import React from "react";

export type MediaProps = {
  variant?: "square" | "circle" | "portrait" | "landscape";
  size?: 16 | 24 | 32 | 48 | 64 | 96 | 144 | 180;
  src?: string;
  fallbackIcon?: React.ReactNode;
};

const Media = ({ variant = "square", size = 16, src, fallbackIcon }: MediaProps) => {
  const avatarVariant = variant === "circle" ? "circular" : "rounded";
  const width = variant === "landscape" ? size * 1.5 : size;
  const height = variant === "portrait" ? size * 1.25 : size;
  const borderRadius = variant === "circle" ? undefined : "6px";

  return (
    <MuiAvatar
      variant={avatarVariant}
      sx={{
        width,
        height,
        borderRadius,
        "& .MuiSvgIcon-root": { width: "75%", height: "75%" },
      }}
      src={src}>
      {fallbackIcon}
    </MuiAvatar>
  );
};

export default Media;

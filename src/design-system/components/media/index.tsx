import MuiAvatar from "@mui/material/Avatar";

export type MediaProps = {
  variant?: "square" | "circle" | "portrait" | "landscape";
  size?: 16 | 24 | 32 | 48 | 64 | 96 | 144 | 180;
  src?: string;
};

const Media = ({ variant = "square", size = 16, src }: MediaProps) => {
  const avatarVariant = variant === "circle" ? "circular" : "rounded";
  const width = variant === "landscape" ? size * 1.5 : size;
  const height = variant === "portrait" ? size * 1.25 : size;
  const borderRadius = variant === "circle" ? undefined : "6px";

  return <MuiAvatar variant={avatarVariant} sx={{ width, height, borderRadius }} src={src} />;
};

export default Media;

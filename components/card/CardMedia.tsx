import MuiCardMedia, { CardMediaProps as MuiCardMediaProps } from "@mui/material/CardMedia";

export type CardMediaProps = {
  width?: string;
  height?: string;
} & Pick<MuiCardMediaProps, "image">;

const CardMedia = (props: CardMediaProps) => (
  <MuiCardMedia
    {...props}
    sx={{
      width: props.width,
      height: props.height,
    }}
    component={"img"}
  />
);

export default CardMedia;

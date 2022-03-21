import MuiCardActionArea, { CardActionAreaProps as MuiCardActionAreaProps } from "@mui/material/CardActionArea";

export type CardActionAreaProps = Pick<MuiCardActionAreaProps, "children" | "onClick">;

const CardActionArea = (props: CardActionAreaProps) => <MuiCardActionArea {...props} disableRipple />;

export default CardActionArea;

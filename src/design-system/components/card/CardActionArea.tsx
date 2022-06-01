import MuiCardActionArea, { CardActionAreaProps as MuiCardActionAreaProps } from "@mui/material/CardActionArea";
import { Box } from "..";

export type CardActionAreaProps = { href?: string } & Pick<MuiCardActionAreaProps, "children" | "onClick">;

const CardActionArea = (props: CardActionAreaProps) => (
  <Box component={"a"} color={"inherit"} sx={{ textDecoration: "none" }} {...(props.href && { href: props.href })}>
    <MuiCardActionArea children={props.children} onClick={props.onClick} disableRipple />
  </Box>
);

export default CardActionArea;

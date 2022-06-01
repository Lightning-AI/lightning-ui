import MuiCardActionArea, { CardActionAreaProps as MuiCardActionAreaProps } from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
import { Box } from "..";

export type CardActionAreaProps = { to?: any } & Pick<MuiCardActionAreaProps, "children" | "onClick">;

const CardActionArea = (props: CardActionAreaProps) => (
  <Box component={Link} {...(props.to && { to: props.to })} color={"inherit"} sx={{ textDecoration: "none" }}>
    <MuiCardActionArea onClick={props.onClick} disableRipple>
      {props.children}
    </MuiCardActionArea>
  </Box>
);

export default CardActionArea;

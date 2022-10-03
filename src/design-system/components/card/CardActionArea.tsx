import MuiCardActionArea, { CardActionAreaProps as MuiCardActionAreaProps } from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

import { Box } from "..";

export type CardActionAreaProps = { to?: any } & Pick<MuiCardActionAreaProps, "children" | "onClick">;

const CardActionArea = (props: CardActionAreaProps) => {
  const content = (
    <MuiCardActionArea onClick={props.onClick} disableRipple>
      {props.children}
    </MuiCardActionArea>
  );
  return props.to || props.to !== "" ? (
    <Box component={Link} to={props.to} color={"inherit"} sx={{ textDecoration: "none" }}>
      {content}
    </Box>
  ) : (
    <>{content}</>
  );
};

export default CardActionArea;

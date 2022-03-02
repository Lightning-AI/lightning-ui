import MuiCardActions, { CardActionsProps as MuiCardActionsProps } from "@mui/material/CardActions";

export type CardActionsProps = Pick<MuiCardActionsProps, "children">;

const CardActions = (props: CardActionsProps) => <MuiCardActions {...props} />;

export default CardActions;

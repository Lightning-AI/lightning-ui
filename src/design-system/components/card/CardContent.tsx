import MuiCardContent, { CardContentProps as MuiCardContentProps } from "@mui/material/CardContent";

export type CardContentProps = Pick<MuiCardContentProps, "children">;

const CardContent = (props: CardContentProps) => <MuiCardContent {...props} />;

export default CardContent;

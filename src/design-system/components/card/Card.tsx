import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";

export type CardProps = {
  width?: string;
} & Pick<MuiCardProps, "children" | "variant">;

const Card = (props: CardProps) => (
  <MuiCard {...props} elevation={2} sx={{ borderRadius: "8px", width: props.width }} />
);

export default Card;

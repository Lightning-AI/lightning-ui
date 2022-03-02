import MuiCardHeader, { CardHeaderProps as MuiCardHeaderProps } from "@mui/material/CardHeader";

export type CardHeaderProps = Pick<MuiCardHeaderProps, "title" | "subheader" | "action">;

const CardHeader = (props: CardHeaderProps) => (
  <MuiCardHeader
    {...props}
    titleTypographyProps={{
      fontSize: "16px",
      fontFamily: "Ucity",
      fontWeight: "600",
      fontStyle: "normal",
      lineHeight: "20px",
      fontColor: "rgba(28, 28, 28, 1)",
    }}
    subheaderTypographyProps={{
      fontSize: "12px",
      fontFamily: "Roboto",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "16px",
      fontColor: "rgba(91, 94, 105, 1)",
    }}
  />
);

export default CardHeader;

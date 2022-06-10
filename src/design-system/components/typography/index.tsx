import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

export type TypographyProps = Omit<MuiTypographyProps, "color"> & {
  /**
   * specify color
   * available options are
   * "primary" | "secondary" | "link" | "disabled" | "button" | "placeholder"
   */
  color?: TextColors;
};

const Typography = (props: TypographyProps) => <MuiTypography {...props} color={getTextColor(props.color)} />;

export default Typography;

type TextColors = "primary" | "secondary" | "link" | "disabled" | "button" | "placeholder" | string;

const getTextColor = (color: TextColors = "primary"): string => {
  switch (color) {
    case "primary":
      return "#1C1C1C"; // if color is passed as in
    case "secondary":
      return "#5B5E69";
    case "link":
      return "#4F00BA";
    case "disabled":
      return "#C5CBD7";
    case "button":
      return "#FFFFFF";
    case "placeholder":
      return "#A0A2AE";
    default:
      console.warn("deprecated: avoid passing color directly");
      return color ?? "#1C1C1C"; // if color is passed as in
  }
};

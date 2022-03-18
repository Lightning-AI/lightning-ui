import { Box } from "../";

const colorProperties = {
  default: {
    color: (theme: any) => theme.palette.common.white,
    backgroundColor: (theme: any) => theme.palette.grey[70],
  },
  primary: {
    color: (theme: any) => theme.palette.common.white,
    background: (theme: any) => theme.palette.primary.gradient,
  },
  success: {
    color: (theme: any) => theme.palette.common.white,
    backgroundColor: (theme: any) => theme.palette.success.main,
  },
  error: {
    color: (theme: any) => theme.palette.common.white,
    backgroundColor: (theme: any) => theme.palette.error.main,
  },
  warning: {
    color: (theme: any) => theme.palette.common.black,
    backgroundColor: (theme: any) => theme.palette.warning.main,
  },
  grey: {
    color: "#050505",
    backgroundColor: "rgba(5, 5, 5, 0.1)",
  },
  purple: {
    color: (theme: any) => theme.palette.primary.contrastText,
    backgroundColor: (theme: any) => theme.palette.primary["10"],
  },
};

export type LabelProps = {
  text: string;
  color?: "default" | "primary" | "success" | "error" | "warning" | "purple";
};

const Label = (props: LabelProps) => {
  return (
    <Box
      display={"inline-flex"}
      alignItems={"center"}
      p={"2px 8px"}
      fontFamily={"Roboto"}
      fontSize={"12px"}
      lineHeight={"16px"}
      fontStyle={"normal"}
      borderRadius={"4px"}
      height={"20px"}
      fontWeight={"bold"}
      sx={colorProperties[props.color ?? "default"]}>
      {props.text}
    </Box>
  );
};

export default Label;

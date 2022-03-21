import { Info, Dangerous, Warning, CheckCircle, Close } from "../../icons";
import { Stack, IconButton } from "../";
import { ReactNode, useEffect, useState } from "react";

const iconStyle = {
  paddingRight: 1,
  fontSize: "16px",
};
const variantIcon: Record<string, ReactNode> = {
  info: <Info sx={{ ...iconStyle, color: "#792EE5" }} />,
  success: <CheckCircle sx={{ ...iconStyle, color: "#31A24C" }} />,
  warning: <Warning sx={{ ...iconStyle, color: "#F1A817" }} />,
  error: <Dangerous sx={{ ...iconStyle, color: "#E02C2D" }} />,
};

type Variants = "info" | "warning" | "error" | "success";

const variantBackgroundColor: Record<Variants, any> = {
  info: "rgba(239, 238, 255, 1)",
  success: "rgba(49, 162, 76, 0.2)",
  warning: "rgba(241, 168, 23, 0.2)",
  error: "rgba(240, 40, 73, 0.2)",
};

export type BannerProps = {
  variant: Variants;
  children: ReactNode;
  show?: boolean;
};

const Banner = ({ children, ...props }: BannerProps) => {
  const [isShown, setIsShown] = useState(props.show);
  useEffect(() => setIsShown(props.show), [props.show]);

  return isShown ? (
    <Stack
      {...props}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        p: 1,
        minHeight: "20px",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "20px",
        backgroundColor: variantBackgroundColor[props.variant],
      }}>
      <Stack direction={"row"} alignItems={"center"}>
        {variantIcon[props.variant]}
        {children}
      </Stack>
      <IconButton onClick={() => setIsShown(false)}>
        <Close sx={{ fontSize: "16px" }} />
      </IconButton>
    </Stack>
  ) : null;
};

export default Banner;

import { Info, Dangerous, Warning, CheckCircle, Close } from "design-system/icons";
import { Box } from "design-system/components";
import { ReactNode, useState } from "react";

const iconStyle = {
  mx: 1,
  fontSize: "16px",
};
const variantIcon: Record<string, ReactNode> = {
  info: <Info sx={{ ...iconStyle, color: "#792EE5" }} />,
  success: <CheckCircle sx={{ ...iconStyle, color: "#31A24C" }} />,
  warning: <Warning sx={{ ...iconStyle, color: "#F1A817" }} />,
  error: <Dangerous sx={{ ...iconStyle, color: "#E02C2D" }} />,
};

const variantBackgroundColor: Record<string, any> = {
  info: "rgba(239, 238, 255, 1)",
  success: "rgba(49, 162, 76, 0.2)",
  warning: "rgba(241, 168, 23, 0.2)",
  error: "rgba(240, 40, 73, 0.2)",
};

export type BannerProps = {
  variant: "info" | "warning" | "error" | "success";
  children: ReactNode;
  show?: boolean;
};

const Banner = ({ children, ...props }: BannerProps) => {
  const [isShown, setIsShown] = useState(props.show ?? true);

  return (
    <Box
      {...props}
      display={isShown ? "flex" : "none"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        py: 1,
        minHeight: "20px",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "20px",
        backgroundColor: variantBackgroundColor[props.variant],
      }}>
      <Box display={"flex"} alignItems={"center"}>
        {variantIcon[props.variant]}
        {children}
      </Box>
      <Close sx={iconStyle} onClick={() => setIsShown(false)} />
    </Box>
  );
};

export default Banner;

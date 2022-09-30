import { ReactNode, useEffect, useState } from "react";

import { Box, IconButton, Stack } from "../";
import { CheckCircle, Close, Dangerous, Info, Warning } from "../../icons";

const iconStyle = {
  paddingRight: 1,
  fontSize: "16px",
};
const variantIcon: Record<string, ReactNode> = {
  info: <Info sx={{ ...iconStyle, color: "#1877F2" }} />,
  success: <CheckCircle sx={{ ...iconStyle, color: "#31A24C" }} />,
  warning: <Warning sx={{ ...iconStyle, color: "#F1A817" }} />,
  error: <Dangerous sx={{ ...iconStyle, color: "#E02C2D" }} />,
};

type Variants = "info" | "warning" | "error" | "success";

const variantBackgroundColor: Record<Variants, any> = {
  info: "rgba(210, 226, 255, 1)",
  success: "rgba(49, 162, 76, 0.2)",
  warning: "rgba(241, 168, 23, 0.2)",
  error: "rgba(240, 40, 73, 0.2)",
};

export type BannerProps = {
  variant: Variants;
  children: ReactNode;
  closeable?: boolean;
  show?: boolean;
};

const Banner = ({ children, ...props }: BannerProps) => {
  const [isShown, setIsShown] = useState(props.show);
  useEffect(() => setIsShown(props.show), [props.show]);

  return isShown ? (
    <Stack
      {...props}
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      sx={{
        borderRadius: "36px",
        px: 1.5,
        py: 1,
        minHeight: "20px",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "20px",
        backgroundColor: variantBackgroundColor[props.variant],
      }}>
      <Stack direction={"row"}>
        <Box paddingTop={0.25} maxHeight={2}>
          {variantIcon[props.variant]}
        </Box>
        {children}
      </Stack>
      {props.closeable && (
        <Box>
          <IconButton onClick={() => setIsShown(false)} sx={{ padding: 0 }}>
            <Close sx={{ fontSize: "16px" }} />
          </IconButton>
        </Box>
      )}
    </Stack>
  ) : null;
};

export default Banner;

import MuiTooltip, { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

import { Box } from "..";

export type TooltipProps = Partial<Pick<MuiTooltipProps, "title">> &
  Pick<MuiTooltipProps, "children" | "placement"> & {
    width?: number | string;
    interactive?: boolean;
    delay?: number;
  };

const Tooltip = ({
  title = "",
  children,
  placement = "top",
  width,
  interactive = true,
  delay = 400,
}: TooltipProps) => {
  return (
    <MuiTooltip title={title} placement={placement} disableInteractive={interactive} enterDelay={delay}>
      <Box component={"span"} sx={{ cursor: title ? "pointer" : "inherit", width }}>
        {children}
      </Box>
    </MuiTooltip>
  );
};

export default Tooltip;

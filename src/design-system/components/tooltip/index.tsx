import MuiTooltip, { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

import { Box } from "..";

export type TooltipProps = Partial<Pick<MuiTooltipProps, "title">> &
  Pick<MuiTooltipProps, "children" | "placement"> & {
    width?: number | string;
    interactive?: boolean;
  };

const Tooltip = ({ title = "", children, placement = "top", width, interactive = true }: TooltipProps) => {
  return (
    <MuiTooltip title={title} placement={placement} disableInteractive={interactive}>
      <Box component={"span"} sx={{ cursor: title ? "pointer" : "inherit", width }}>
        {children}
      </Box>
    </MuiTooltip>
  );
};

export default Tooltip;

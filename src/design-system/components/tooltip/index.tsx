import MuiTooltip, { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

import { Box } from "..";

export type TooltipProps = Partial<Pick<MuiTooltipProps, "title">> &
  Pick<MuiTooltipProps, "children" | "placement"> & {
    width?: number | string;
  };

const Tooltip = ({ title = "", children, placement = "top", width }: TooltipProps) => {
  return (
    <MuiTooltip title={title} placement={placement}>
      <Box component={"span"} sx={{ cursor: title ? "pointer" : "inherit", width }}>
        {children}
      </Box>
    </MuiTooltip>
  );
};

export default Tooltip;

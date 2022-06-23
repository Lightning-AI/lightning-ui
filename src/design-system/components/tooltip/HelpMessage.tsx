import MuiTooltip from "@mui/material/Tooltip";
import { TooltipProps } from ".";
import { Box } from "..";

export type HelpMessageProps = TooltipProps;

export default function HelpMessage({ title = "", children, placement = "top" }: HelpMessageProps) {
  return (
    <MuiTooltip
      title={title}
      placement={placement}
      componentsProps={{
        tooltip: {
          sx: {
            maxWidth: 220,
          },
        },
      }}>
      <Box component={"span"} sx={{ cursor: title ? "pointer" : "inherit" }}>
        {children}
      </Box>
    </MuiTooltip>
  );
}

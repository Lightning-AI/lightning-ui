import MuiTooltip, { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

export type TooltipProps = Pick<MuiTooltipProps, "className" | "classes" | "title" | "children" | "placement">;

const Tooltip = (props: TooltipProps) => {
  return <MuiTooltip {...props} />;
};

export default Tooltip;

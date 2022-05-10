import MuiTooltip, { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

export type TooltipProps = Pick<MuiTooltipProps, "title" | "children" | "placement">;

export default function HelpMessage(props: TooltipProps) {
  return (
    <MuiTooltip
      {...props}
      componentsProps={{
        tooltip: {
          sx: {
            maxWidth: 220,
            backgroundColor: "#5B5E69",
          },
        },
      }}
    />
  );
}

import MuiTooltip, { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

export type HelpMessageProps = Pick<MuiTooltipProps, "title" | "children" | "placement">;

export default function HelpMessage(props: HelpMessageProps) {
  return (
    <MuiTooltip
      {...props}
      componentsProps={{
        tooltip: {
          sx: {
            maxWidth: 220,
            backgroundColor: theme => theme.palette.grey[70],
          },
        },
      }}
    />
  );
}

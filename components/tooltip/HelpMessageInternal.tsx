import MuiTooltip from "@mui/material/Tooltip";

import { TooltipProps } from ".";

export type HelpMessageInternalProps = TooltipProps;

/**
 * A simple HelpMessage component that doesn't wrap the children in a Box.
 * We wrap the children in a Box in the HelpMessage to make sure that we set the cursor to "pointer" when needed,
 * but we shouldn't wrap the HelpMessage children in a Box in the InfoIconWithHelpTooltip component because
 * this breaks the positioning of the InfoIcon.
 */
export default function HelpMessageInternal({ title = "", children, placement = "top" }: HelpMessageInternalProps) {
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
      {children}
    </MuiTooltip>
  );
}

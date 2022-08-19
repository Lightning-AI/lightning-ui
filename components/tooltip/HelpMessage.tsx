import { Box } from "..";
import HelpMessageInternal, { HelpMessageInternalProps } from "./HelpMessageInternal";

export type HelpMessageProps = HelpMessageInternalProps;

export default function HelpMessage({ title = "", children, placement = "top" }: HelpMessageProps) {
  return (
    <HelpMessageInternal title={title} placement={placement}>
      <Box component={"span"} sx={{ cursor: title ? "pointer" : "inherit" }}>
        {children}
      </Box>
    </HelpMessageInternal>
  );
}

import { HelpOutlineRounded } from "@mui/icons-material";

import HelpMessageInternal, { HelpMessageInternalProps } from "./HelpMessageInternal";

export type InfoIconWithHelpTooltipProps = {
  message: HelpMessageInternalProps["title"];
  size?: "default" | "small";
};

export default function InfoIconWithHelpTooltip({ message, size }: InfoIconWithHelpTooltipProps) {
  return (
    <HelpMessageInternal title={message} placement={"top"}>
      <HelpOutlineRounded
        sx={{
          fontSize: size === "small" ? "12px" : "15px",
          color: (theme: any) => theme.palette.grey[70],
          cursor: "pointer",
        }}
      />
    </HelpMessageInternal>
  );
}

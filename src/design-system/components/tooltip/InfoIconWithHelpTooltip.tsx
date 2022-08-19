import { InfoOutlined } from "@mui/icons-material";

import HelpMessageInternal, { HelpMessageInternalProps } from "./HelpMessageInternal";

export type InfoIconWithHelpTooltipProps = {
  message: HelpMessageInternalProps["title"];
};

export default function InfoIconWithHelpTooltip({ message }: InfoIconWithHelpTooltipProps) {
  return (
    <HelpMessageInternal title={message} placement={"top"}>
      <InfoOutlined sx={{ fontSize: "15px", color: (theme: any) => theme.palette.grey[70], cursor: "pointer" }} />
    </HelpMessageInternal>
  );
}

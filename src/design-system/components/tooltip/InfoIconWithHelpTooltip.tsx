import React from "react";
import { InfoRounded } from "@mui/icons-material";

import HelpMessage from "./HelpMessage";

type InfoIconWithHelpTooltipProps = {
  message: string;
};

export default function InfoIconWithHelpTooltip({ message }: InfoIconWithHelpTooltipProps) {
  return (
    <HelpMessage title={message} placement={"top"}>
      <InfoRounded sx={{ color: (theme: any) => theme.palette.grey[100] }} />
    </HelpMessage>
  );
}

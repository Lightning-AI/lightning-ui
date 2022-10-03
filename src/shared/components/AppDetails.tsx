import React from "react";

import { Button, Media, Stack, Typography } from "../../design-system/components";
import { Edit, Event, ImageOutlined, LocalOffer } from "../../design-system/icons";
import formatDate from "../utils/formatDate";

export type AppDetailsProps = {
  image?: string;
  description?: string;
  lastEdited?: Date;
  tags?: string[];
  onEdit?: () => void;
};

const defaultDescription = "No app description";
const defaultTags = ["Artificial Intelligence", "Research"];

const AppDetails = ({ description = defaultDescription, tags = defaultTags, ...props }: AppDetailsProps) => {
  return (
    <Stack direction={"row"} spacing={1.5}>
      <Media variant={"landscape"} size={96} src={props.image} fallbackIcon={<ImageOutlined />}></Media>
      <Stack justifyContent={"space-between"} alignItems={"flex-start"}>
        <Typography variant={"body2"} sx={{ fontFamily: "Roboto", color: "#585757" }}>
          {description}
        </Typography>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Event sx={{ fontSize: "16px", color: "#525666" }} />
          <Typography variant={"body2"} sx={{ fontFamily: "Roboto", color: "#65676B" }}>
            Last edited: {formatDate(props.lastEdited)}
          </Typography>
          <LocalOffer sx={{ fontSize: "16px", color: "#525666" }} />
          <Typography variant={"body2"} sx={{ fontFamily: "Roboto", color: "#65676B" }}>
            {tags.join(", ")}
          </Typography>
        </Stack>
        <Button color={"grey"} text="Edit" icon={<Edit />} onClick={props.onEdit} disabled={!props.onEdit} />
      </Stack>
    </Stack>
  );
};

export default AppDetails;

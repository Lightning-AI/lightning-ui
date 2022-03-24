import React from "react";
import { Button, Media, Stack, Typography } from "../../design-system/components";
import { Event, LocalOffer, Edit } from "../../design-system/icons";
import formatDate from "../utils/formatDate";

export type AppDetailsProps = {
  image: string;
  description: string;
  lastEdited: string;
  tags: string[];
  onEdit: () => void;
};

const AppDetails = (props: AppDetailsProps) => {
  return (
    <Stack direction={"row"} spacing={1.5}>
      <Media variant={"landscape"} size={96} src={props.image}></Media>
      <Stack justifyContent={"space-between"} alignItems={"flex-start"}>
        <Typography variant={"body2"} sx={{ fontFamily: "Roboto", color: "#585757" }}>
          {props.description}
        </Typography>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Event sx={{ fontSize: "16px", color: "#525666" }} />
          <Typography variant={"body2"} sx={{ fontFamily: "Roboto", color: "#65676B" }}>
            Last edited: {formatDate(props.lastEdited)}
          </Typography>
          <LocalOffer sx={{ fontSize: "16px", color: "#525666" }} />
          <Typography variant={"body2"} sx={{ fontFamily: "Roboto", color: "#65676B" }}>
            {props.tags.join(", ")}
          </Typography>
        </Stack>
        <Button color={"grey"} text="Edit" icon={<Edit />} onClick={props.onEdit} />
      </Stack>
    </Stack>
  );
};

export default AppDetails;

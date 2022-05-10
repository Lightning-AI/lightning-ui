import { Box, Stack } from "../../design-system/components";
import { CircleOutlined, Circle } from "../../design-system/icons";
import Tooltip from "design-system/components/tooltip";
import IconButton from "@mui/material/IconButton";
import { InfoRounded } from "design-system/icons";

export enum StatusEnum {
  NOT_YET_RUN = "Not yet run",
  NOT_STARTED = "Not started",
  UNSPECIFIED = "Unspecified",
  BUILDING = "Building",
  REQUESTING = "Requesting",
  PENDING = "Pending",
  BLOCKING = "Blocking",
  STARTING = "Starting",
  RESTARTING = "Restarting",
  RUNNING = "Running",
  STOPPING = "Stopping",
  STOPPED = "Stopped",
  PAUSED = "Paused",
  DELETED = "Deleted",
  SUCCEEDED = "Succeeded",
  FAILED = "Failed",
}

const StatusColor: Record<StatusEnum, string> = {
  [StatusEnum.NOT_YET_RUN]: "#B3B9BB",
  [StatusEnum.NOT_STARTED]: "#B3B9BB",
  [StatusEnum.UNSPECIFIED]: "#B3B9BB",
  [StatusEnum.BUILDING]: "#792EE5",
  [StatusEnum.REQUESTING]: "#792EE5",
  [StatusEnum.PENDING]: "#FCBE2E",
  [StatusEnum.BLOCKING]: "#FCBE2E",
  [StatusEnum.STARTING]: "#792EE5",
  [StatusEnum.RESTARTING]: "#792EE5",
  [StatusEnum.RUNNING]: "#19A004",
  [StatusEnum.STOPPING]: "#65676B",
  [StatusEnum.STOPPED]: "#65676B",
  [StatusEnum.PAUSED]: "#65676B",
  [StatusEnum.DELETED]: "#FCBE2E",
  [StatusEnum.SUCCEEDED]: "#19A004",
  [StatusEnum.FAILED]: "#E02C2D",
};

export type StatusProps = {
  status: StatusEnum;
  message?: string;
};

const Status = ({ status, message }: StatusProps) => {
  const iconStyle = { fontSize: "14px", color: StatusColor[status] };
  const statusIcon = [StatusEnum.NOT_YET_RUN, StatusEnum.NOT_STARTED].includes(status) ? (
    <CircleOutlined sx={iconStyle} />
  ) : (
    <Circle sx={iconStyle} />
  );
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
      {statusIcon} <Box>{status?.toString()}</Box>
      {message && (
        <Tooltip title={message} placement={"top"}>
          <IconButton>
            <InfoRounded />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
};

export default Status;

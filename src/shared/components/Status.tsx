import { Box, Stack } from "../../design-system/components";
import { CircleOutlined, Circle } from "../../design-system/icons";

export enum StatusEnum {
  NOT_YET_RUN = "Not yet run",
  UNSPECIFIED = "Unspecified",
  BUILDING = "Building",
  PENDING = "Pending",
  RUNNING = "Running",
  STOPPED = "Stopped",
  DELETED = "Deleted",
  FINISHED = "Finished",
  FAILED = "Failed",
}

const StatusColor: Record<StatusEnum, string> = {
  [StatusEnum.NOT_YET_RUN]: "#B3B9BB",
  [StatusEnum.UNSPECIFIED]: "#B3B9BB",
  [StatusEnum.BUILDING]: "#792EE5",
  [StatusEnum.PENDING]: "#FCBE2E",
  [StatusEnum.RUNNING]: "#19A004",
  [StatusEnum.STOPPED]: "#65676B",
  [StatusEnum.DELETED]: "#FCBE2E",
  [StatusEnum.FINISHED]: "#19A004",
  [StatusEnum.FAILED]: "#E02C2D",
};

export type StatusProps = {
  status: StatusEnum;
};

const Status = (props: StatusProps) => {
  const iconStyle = { fontSize: "14px", color: StatusColor[props.status] };
  const statusIcon =
    props.status === StatusEnum.NOT_YET_RUN ? <CircleOutlined sx={iconStyle} /> : <Circle sx={iconStyle} />;
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
      {statusIcon} <Box>{props.status.toString()}</Box>
    </Stack>
  );
};

export default Status;

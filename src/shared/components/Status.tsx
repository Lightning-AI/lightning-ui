import { Stack, Tooltip, Typography } from "@mui/material";

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

const StatusPill = ({ status, message }: StatusProps) => {
  return (
    <Tooltip title={message? message : ''}>
      <Stack 
        direction={"row"} 
        alignItems={"center"} 
        justifyContent={'center'}
        borderRadius={4}
        width={'80px'}
        spacing={1} 
        sx={{
          backgroundColor: `${StatusColor[status]}22`,
          padding: '4px',
        }}
        >
        <Typography fontWeight={800} fontSize={'12px'} color={StatusColor[status]}>{status?.toString()}</Typography>
    </Stack>
    </Tooltip>
  );
};

export default StatusPill;

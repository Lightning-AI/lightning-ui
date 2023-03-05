import { Typography } from "@mui/material";
import MuiStep, { StepProps as MuiStepProps } from "@mui/material/Step";
import MuiStepLabel, { StepLabelProps as MuiStepLabelProps } from "@mui/material/StepLabel";

import { CircularProgress } from "../";
import { CheckCircleRounded, ErrorRounded, RadioButtonUncheckedRounded } from "../../icons";

export type StepProps = { text: string } & Pick<MuiStepProps, "completed" | "active"> &
  Pick<MuiStepLabelProps, "error">;

const ICON_SIZE = "16px";

const getStyleProps = (props: StepProps) => {
  const styleProps = {
    icon: <RadioButtonUncheckedRounded sx={{ fontSize: ICON_SIZE, color: (theme: any) => theme.palette.grey[70] }} />,
    color: (theme: any) => theme.palette.grey[100],
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
  };
  if (props.error) {
    styleProps.icon = <ErrorRounded sx={{ fontSize: ICON_SIZE }} color={"error"} />;
  } else if (props.completed) {
    styleProps.icon = <CheckCircleRounded sx={{ fontSize: ICON_SIZE }} color={"primary"} />;
    styleProps.color = (theme: any) => theme.palette.primary[70];
    styleProps.fontWeight = 600;
  } else if (props.active) {
    styleProps.icon = <CircularProgress size={16} thickness={6} />;
  }
  return styleProps;
};
const Step = (props: StepProps) => {
  const styleProps = getStyleProps(props);
  return (
    <MuiStep {...props}>
      <MuiStepLabel error={props.error} StepIconComponent={() => styleProps.icon}>
        <Typography {...styleProps}>{props.text}</Typography>
      </MuiStepLabel>
    </MuiStep>
  );
};

export default Step;

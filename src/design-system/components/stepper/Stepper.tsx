import MuiStepper, { StepperProps as MuiStepperProps } from "@mui/material/Stepper";

export type StepperProps = Pick<MuiStepperProps, "children">;

const Stepper = (props: StepperProps) => <MuiStepper {...props} />;

export default Stepper;

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Stepper, StepperProps, Step } from "design-system/components/stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=38552%3A57797",
    },
  },
  argTypes: {
    activeStep: {
      defaultValue: -1,
      control: "number",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<any> = args => {
  return (
    <Stepper>
      <Step text={"Step 1"} completed={args.activeStep! > 0} active={args.activeStep! === 0} />
      <Step text={"Step 2"} completed={args.activeStep! > 1} active={args.activeStep! === 1} />
      <Step text={"Step 3"} completed={args.activeStep! > 2} active={args.activeStep! === 2} />
    </Stepper>
  );
};

export const Playground = Template.bind({});

export const StepStatus: ComponentStory<any> = (args: StepperProps) => (
  <Stepper>
    <Step text={"Step Completed"} completed />
    <Step text={"Step Active"} active />
    <Step text={"Step Error"} error />
    <Step text={"Step Not Started"} />
  </Stepper>
);

StepStatus.parameters = { controls: { exclude: ["activeStep"] } };

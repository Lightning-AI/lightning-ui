import { ComponentMeta, ComponentStory } from "@storybook/react";
import Snackbar, { SnackbarProps } from "design-system/components/snackbar";
import Button from "design-system/components/button";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=55878%3A95652",
    },
  },
  argTypes: {
    title: {
      defaultValue: "Snackbar Title",
      control: "text",
    },
    severity: {
      defaultValue: "info",
      options: ["info", "success", "error", "warning"],
      control: "select",
    },
    children: {
      defaultValue: "You are offline, Please check your connectiviy",
      control: "text",
    },
    open: {
      defaultValue: true,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args: SnackbarProps) => {
  return <Snackbar {...args} />;
};

export const Playground = Template.bind({});


import { ComponentMeta, ComponentStory } from "@storybook/react";
import Snackbar, { SnackbarProps } from "design-system/components/snackbar";
import Button from "design-system/components/button";
import { useState } from "react";
import { Box } from "@mui/material";

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
      defaultValue: "You are offline, Please check your connectivity",
      control: "text",
    },
    vertical: {
      defaultValue: "bottom",
      options: ["top", "bottom"],
      control: "select",
    },
    horizontal: {
      defaultValue: "left",
      options: ["left", "center", "right"],
      control: "select",
    },
    action: {
      defaultValue: false,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = ({ action, ...args }: SnackbarProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;

    setOpen(false);
  };

  const actionComponent = action ? <Button text="Call to Action" color={"grey"}></Button> : undefined;
  return (
    <>
      <Box height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button text={"Open snackbar"} onClick={handleClick} />
      </Box>

      <Snackbar {...args} open={open} onClose={handleClose} action={actionComponent} />
    </>
  );
};

export const Playground = Template.bind({});

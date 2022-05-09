import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dialog, { DialogProps } from "design-system/components/dialog/Dialog";
import { DialogTitle, DialogContent, DialogActions } from "design-system/components/dialog";
import Button from "design-system/components/button";
import { Box, Stack } from "..";
import DialogNotification, { DialogNotificationProps } from "./DialogNotification";

export default {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=37781%3A2115",
    },
  },
  argTypes: {
    open: {
      defaultValue: true,
      control: "boolean",
    },
    fullWidth: {
      defaultValue: true,
      control: "boolean",
    },
    children: {
      table: {
        disable: true,
      },
    },
    variant: {
      defaultValue: "success",
      options: ["success", "error", "warning"],
      control: "select",
    },
    message: {
      defaultValue: "Successfully uploaded",
      control: "text",
    },
    description: {
      defaultValue: "Your image has been uploaded to the tool",
      control: "text",
    },
    actions: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<any> = (args: DialogProps) => {
  const buttonOnClickHandler = (event: any) => event.stopPropagation();
  return (
    <Dialog {...args}>
      <DialogTitle text={"Dialog Header"} subtext={"Dialog Subheader"} />
      <DialogContent>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"150px"}>
          Dialog Content
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display={"flex"} justifyContent={"end"} width={"100%"}>
          <Button text="Cancel" color={"grey"} onClick={buttonOnClickHandler} />
          <Box px={1} />
          <Button text="Confirm" onClick={buttonOnClickHandler} />
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { include: ["open", "fullWidth"] } };

const buttonOnClickHandler = (event: any) => event.stopPropagation();

const getActions = {
  success: (
    <>
      <Button text="Done" onClick={buttonOnClickHandler} fullWidth />
    </>
  ),
  error: (
    <>
      <Button text="Report" color={"grey"} onClick={buttonOnClickHandler} fullWidth />
      <Button text="Retry" onClick={buttonOnClickHandler} fullWidth />
    </>
  ),
  warning: (
    <>
      <Button text="Back" color={"grey"} onClick={buttonOnClickHandler} fullWidth />
      <Button text="Discard" onClick={buttonOnClickHandler} fullWidth />
    </>
  ),
};

const NotificationTemplate: ComponentStory<any> = (args: DialogNotificationProps) => {
  const actions = (
    <Stack width={"100%"} direction={"row"} spacing={1}>
      {getActions[args.variant]}
    </Stack>
  );
  return <DialogNotification {...args} actions={actions}></DialogNotification>;
};

export const Notifications = NotificationTemplate.bind({});
Notifications.parameters = { controls: { include: ["open", "variant", "message", "description"] } };

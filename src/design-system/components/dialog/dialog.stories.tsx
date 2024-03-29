import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "design-system/components/button";
import { DialogActions, DialogContent, DialogTitle } from "design-system/components/dialog";
import Dialog, { DialogProps } from "design-system/components/dialog/Dialog";

import { Box, Stack } from "..";
import DialogFormActions, { DialogFormActionsProps } from "./DialogFormActions";
import DialogImageActions, { DialogImageActionsProps } from "./DialogImageActions";
import DialogNotification, { DialogNotificationProps } from "./DialogNotification";
import phantomSrc from "./phantom.svg";

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
    centerTitle: {
      defaultValue: false,
      control: "boolean",
    },
    disableCloseButton: {
      defaultValue: false,
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
    title: {
      defaultValue: "Upload Image",
      control: "text",
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

const Template: ComponentStory<any> = ({
  centerTitle,
  disableCloseButton,
  ...dialogProps
}: DialogProps & { centerTitle?: boolean; disableCloseButton?: boolean }) => {
  const buttonOnClickHandler = (event: any) => event.stopPropagation();
  return (
    <Dialog {...dialogProps}>
      <DialogTitle
        text={"Dialog Header"}
        subtext={"Dialog Subheader"}
        center={centerTitle}
        onCloseClick={disableCloseButton ? undefined : () => {}}
      />
      <DialogContent>
        <Stack justifyContent={"center"} alignItems={"center"} height={"150px"}>
          Dialog Content
        </Stack>
      </DialogContent>
      <DialogActions>
        <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
          <Button text="Cancel" color={"grey"} onClick={buttonOnClickHandler} />
          <Button text="Confirm" onClick={buttonOnClickHandler} />
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export const Playground = Template.bind({});
Playground.parameters = { controls: { include: ["open", "fullWidth", "centerTitle", "disableCloseButton"] } };

const ImageActionsTemplate: ComponentStory<any> = (args: DialogImageActionsProps) => {
  const actions = (
    <Stack width={"100%"} direction={"row"} spacing={1}>
      <Box width={"100%"}>
        <Button text="Cancel" color={"grey"} onClick={buttonOnClickHandler} fullWidth />
      </Box>
      <Box width={"100%"}>
        <Button text="Ok" onClick={buttonOnClickHandler} fullWidth />
      </Box>
    </Stack>
  );
  return <DialogImageActions {...args} actions={actions} imageSrc={phantomSrc}></DialogImageActions>;
};

export const ImageActions = ImageActionsTemplate.bind({});
ImageActions.parameters = { controls: { include: ["open", "title", "message", "description"] } };

const buttonOnClickHandler = (event: any) => event.stopPropagation();

const getActions = {
  success: (
    <Box width={"100%"}>
      <Button text="Done" onClick={buttonOnClickHandler} fullWidth />
    </Box>
  ),
  error: (
    <>
      <Box width={"100%"}>
        <Button text="Report" color={"grey"} onClick={buttonOnClickHandler} fullWidth />
      </Box>
      <Box width={"100%"}>
        <Button text="Retry" onClick={buttonOnClickHandler} fullWidth />
      </Box>
    </>
  ),
  warning: (
    <>
      <Box width={"100%"}>
        <Button text="Back" color={"grey"} onClick={buttonOnClickHandler} fullWidth />
      </Box>
      <Box width={"100%"}>
        <Button text="Discard" onClick={buttonOnClickHandler} fullWidth />
      </Box>
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

const formActions = {
  submit: (
    <Stack width={"100%"} direction={"row"} justifyContent={"space-between"}>
      <Button text="Cancel" color={"grey"} onClick={buttonOnClickHandler} />
      <Button text="Submit" onClick={buttonOnClickHandler} fullWidth />
    </Stack>
  ),
};

const FormActionsTemplate: ComponentStory<any> = (args: DialogFormActionsProps) => {
  const actions = (
    <Stack width={"100%"} direction={"row"} spacing={1}>
      {formActions.submit}
    </Stack>
  );
  return <DialogFormActions {...args} actions={actions}></DialogFormActions>;
};

export const FormActions = FormActionsTemplate.bind({});
FormActions.parameters = { controls: { include: ["open", "variant", "message", "description"] } };

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dialog, { DialogProps } from "design-system/components/dialog/Dialog";
import { DialogTitle, DialogContent, DialogActions } from "design-system/components/dialog";
import Button from "design-system/components/button";
import { Box } from "..";

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
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<any> = (args: DialogProps) => {
  const buttonOnClickHandler = (event: any) => event.stopPropagation();
  return (
    <Dialog {...args}>
      <DialogTitle text={"Dialog Header"} />
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

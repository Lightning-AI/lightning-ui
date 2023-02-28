import { Box } from "@mui/material";
import Button from "design-system/components/button";
import { useSnackbar } from "design-system/components/snackbar-provider/useSnackbar";

const Demo = ({ action, persist, ...args }: { action: boolean; persist: boolean }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const actionComponent = action
    ? (key: string) => <Button color={"grey"} text={"Add credits"} onClick={() => closeSnackbar(key)} />
    : undefined;
  return (
    <Box height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Button
        text={"Open snackbar"}
        onClick={() => {
          enqueueSnackbar({ action: actionComponent, ...args }, { persist });
        }}
      />
    </Box>
  );
};

export default {
  title: "Components/SnackbarProvider",
  component: Demo,
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
    action: {
      defaultValue: false,
      control: "boolean",
    },
    persist: {
      defaultValue: false,
      control: "boolean",
    },
  },
};

const Template = (args: any) => <Demo {...args} />;

export const Playground = Template.bind({});

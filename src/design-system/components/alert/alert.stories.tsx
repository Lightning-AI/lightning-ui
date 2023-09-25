import { useEffect, useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alert, { AlertProps } from "design-system/components/alert";
import Button from "design-system/components/button";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=34883%3A34",
    },
  },
  argTypes: {
    title: {
      defaultValue: "Alert Title",
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
    show: {
      defaultValue: true,
      control: "boolean",
    },
    action: {
      defaultValue: false,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ action, ...args }: AlertProps) => {
  const [show, setShow] = useState(args.show);
  useEffect(() => setShow(args.show), [args.show]);
  const actionComponent = action ? <Button text="Call to Action" color={"grey"}></Button> : undefined;
  return <Alert {...args} action={actionComponent} onClose={() => setShow(false)} show={show} />;
};

export const Playground = Template.bind({});

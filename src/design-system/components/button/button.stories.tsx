import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonProps } from "design-system/components/button";
import * as Icons from "design-system/icons";

import { SvgIcon } from "..";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=29421%3A0",
    },
  },
  argTypes: {
    text: {
      defaultValue: "Button",
      control: "text",
    },
    tooltip: {
      defaultValue: "A Tooltip",
      control: "text",
    },
    icon: {
      options: [undefined, ...Object.keys(Icons)],
      defaultValue: undefined,
      control: "select",
    },
    color: {
      options: ["primary", "grey", "success", "error"],
      control: "select",
    },
    variant: {
      options: ["outlined", "contained", "text"],
      control: "select",
    },
    cursor: {
      control: "boolean",
      defaultValue: false,
    },
    pill: {
      control: "boolean",
      defaultValue: false,
    },
    size: {
      options: ["medium", "small"],
      control: "select",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    loading: {
      control: "boolean",
      defaultValue: false,
    },
    arrow: {
      control: "boolean",
      defaultValue: false,
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
    href: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ icon, href, ...args }: ButtonProps) => {
  // @ts-ignore
  const iconComponent = icon && <SvgIcon component={Icons[icon]} />;
  const onClickHandler = href ? () => window.alert(`Navigate to ${href}`) : args.onClick;
  return <Button {...args} onClick={onClickHandler} icon={iconComponent} />;
};

export const Playground = Template.bind({});

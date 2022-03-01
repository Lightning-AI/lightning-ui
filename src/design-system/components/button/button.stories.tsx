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
    label: {
      defaultValue: "Button",
      control: 'text',
    },
    icon: {
      options: ["", ...Object.keys(Icons)],
      defaultValue: "",
      control: 'select',
    },
    color: {
      options: ['primary', 'grey', 'success', 'error'],
      control: 'select',
    },
    variant: {
      options: ['contained', 'text'],
      control: 'select',
    },
    size: {
      options: ['medium', 'small'],
      control: 'select',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
    href: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({icon, href,  ...args }: ButtonProps) => {
  // @ts-ignore
  const iconComponent = icon !== "" ? <SvgIcon component={Icons[icon]} /> : null;
  const onClickHandler = href ? () => window.alert(`Navigate to ${href}`) : args.onClick;
  return <Button {...args} onClick={onClickHandler} icon={iconComponent} />
};

export const Playground = Template.bind({});
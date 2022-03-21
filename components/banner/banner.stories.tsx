import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner, { BannerProps } from "design-system/components/banner";

export default {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=33152%3A71640",
    },
  },
  argTypes: {
    variant: {
      defaultValue: "info",
      options: ["info", "success", "error", "warning"],
      control: "select",
    },
    show: {
      defaultValue: true,
      control: "boolean",
    },
    children: {
      defaultValue: "You are offline, Please check your connectivity",
      control: "text",
    },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args: BannerProps) => {
  return <Banner {...args} />;
};

export const Playground = Template.bind({});

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination, { PaginationProps } from "design-system/components/pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=38552%3A59536",
    },
  },
  argTypes: {
    count: {
      defaultValue: 10,
      control: "number",
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args: PaginationProps) => {
  return <Pagination {...args} />;
};

export const Playground = Template.bind({});

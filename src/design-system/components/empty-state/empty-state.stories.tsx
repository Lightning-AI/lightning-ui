import { ComponentMeta, ComponentStory } from "@storybook/react";
import EmptyState, { EmptyStateProps } from "design-system/components/empty-state";

import { Button } from "../";
import emptyListUrl from "../../stories/assets/empty-list.svg";

export default {
  title: "Components/EmptyState",
  component: EmptyState,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=32208%3A10495",
    },
  },
  argTypes: {
    title: {
      defaultValue: "No credit history found",
      control: "text",
    },
    message: {
      defaultValue: "A record of your credit usage will appear here once you run the app.",
      control: "text",
    },
    children: {
      defaultValue: true,
      control: "boolean",
    },
  },
} as ComponentMeta<typeof EmptyState>;

const Template: ComponentStory<typeof EmptyState> = (args: EmptyStateProps) => {
  const childrenNode = args.children ? <Button text={"Run app"} fullWidth /> : <></>;
  return <EmptyState {...args} src={emptyListUrl} children={childrenNode} />;
};

export const Playground = Template.bind({});

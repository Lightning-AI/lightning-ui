import { ComponentMeta, ComponentStory } from "@storybook/react";
import Media, { MediaProps } from "design-system/components/media";

export default {
  title: "Components/Media",
  component: Media,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=32208%3A10495",
    },
  },
  argTypes: {
    variant: {
      defaultValue: "square",
      options: ["square", "circle", "portrait", "landscape"],
      control: "select",
    },
    size: {
      defaultValue: 16,
      options: [16, 24, 32, 48, 64, 96, 144, 180],
      control: "select",
    },
  },
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args: MediaProps) => <Media {...args} />;

export const Playground = Template.bind({});

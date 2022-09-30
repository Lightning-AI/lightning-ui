import { ComponentMeta, ComponentStory } from "@storybook/react";
import Media, { MediaProps } from "design-system/components/media";
import * as Icons from "design-system/icons";

import { SvgIcon } from "..";

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
    fallbackIcon: {
      options: [undefined, ...Object.keys(Icons)],
      defaultValue: undefined,
      control: "select",
    },
  },
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = ({ fallbackIcon, ...args }: MediaProps) => {
  // @ts-ignore
  const iconComponent = fallbackIcon && <SvgIcon component={Icons[fallbackIcon]} />;
  return <Media {...args} fallbackIcon={iconComponent} />;
};

export const Playground = Template.bind({});

import { ComponentMeta } from "@storybook/react";
import Typography from "design-system/components/typography";

export default {
  title: "Theme/Typography",
  component: Typography,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=66905%3A31728",
    },
  },
} as ComponentMeta<typeof Typography>;

export const All = () => {
  return (
    <>
      <Typography variant="h1">H1 variant text sample</Typography>
      <Typography variant="h2">H2 variant text sample</Typography>
      <Typography variant="h3">H3 variant text sample</Typography>
      <Typography variant="h4">H4 variant text sample</Typography>
      <Typography variant="h5">H5 variant text sample</Typography>
      <Typography variant="h6">H6 variant text sample</Typography>
      <Typography variant="subtitle1">Subtitle1 variant text sample</Typography>
      <Typography variant="subtitle2">Subtitle2 variant text sample</Typography>
      <Typography variant="body1">Body1 variant text sample</Typography>
      <Typography variant="body2">Body2 variant text sample</Typography>
      <Typography variant="caption">Caption variant text sample</Typography>
      <br></br>
      <Typography variant="overline">Overline variant text sample</Typography>
    </>
  );
};

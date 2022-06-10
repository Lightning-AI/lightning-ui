import { ComponentMeta } from "@storybook/react";
import Typography from "design-system/components/typography";

export default {
  title: "Theme/Typography",
  component: Typography,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=49536%3A0",
    },
  },
} as ComponentMeta<typeof Typography>;

export const All = () => {
  return (
    <>
      <Typography variant="h1">h1 variant text sample</Typography>
      <Typography variant="h2">h2 variant text sample</Typography>
      <Typography variant="h3">h3 variant text sample</Typography>
      <Typography variant="h4">h4 variant text sample</Typography>
      <Typography variant="h5">h5 variant text sample</Typography>
      <Typography variant="h6">h6 variant text sample</Typography>
      <Typography variant="h7">h7 variant text sample</Typography>
      <Typography variant="subtitle1">Subtitle1 variant text sample</Typography>
      <Typography variant="subtitle2">Subtitle2 variant text sample</Typography>
      <Typography variant="body">Body variant text sample</Typography>
      <br></br>
      <Typography variant="largeEmphasized">Large Emphasized variant text sample</Typography>
      <br></br>
      <Typography variant="emphasized">Emphasized variant text sample</Typography>
      <br></br>
      <Typography variant="helper">helper variant text sample</Typography>
      <br></br>
      <Typography variant="button">Button variant text sample</Typography>
    </>
  );
};

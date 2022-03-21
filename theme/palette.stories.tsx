import { ComponentMeta } from "@storybook/react";
import { Box, Typography } from "design-system/components/";

export default {
  title: "Theme/Palette",
  component: Box,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tLrz5T82EKYMnqgvnk1Ldo/UILibrary?node-id=66748%3A29398",
    },
  },
} as ComponentMeta<typeof Box>;

export const All = () => {
  return (
    <>
      <Box>
        <Typography variant={"h6"} sx={{ marginLeft: 1 }}>
          PRIMARY
        </Typography>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "primary.70" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              70
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "primary.50" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              50
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "primary.40" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              40
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "primary.20" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              20
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "primary.10" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              10
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} marginLeft={10}>
            <Box
              m={1}
              width={65}
              height={65}
              sx={{ background: (theme: any) => theme.palette.primary.gradient }}></Box>
            <Typography variant={"body1"} align={"center"}>
              GRADIENT
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant={"h6"} sx={{ marginLeft: 1 }}>
          SECONDARY
        </Typography>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "secondary.70" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              70
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "secondary.50" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              50
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "secondary.40" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              40
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "secondary.20" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              20
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "secondary.10" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              10
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant={"h6"} sx={{ marginLeft: 1 }}>
          SUCCESS
        </Typography>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "success.70" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              70
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "success.50" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              50
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "success.20" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              20
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "success.10" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              10
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant={"h6"} sx={{ marginLeft: 1 }}>
          WARNING
        </Typography>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "warning.70" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              70
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "warning.50" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              50
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "warning.20" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              20
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "warning.10" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              10
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant={"h6"} sx={{ marginLeft: 1 }}>
          ERROR
        </Typography>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "error.70" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              70
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "error.50" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              50
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "error.20" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              20
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "error.10" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              10
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant={"h6"} sx={{ marginLeft: 1 }}>
          GREY
        </Typography>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "grey.100" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              100
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "grey.70" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              70
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "grey.50" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              50
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "grey.40" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              40
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "grey.20" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              20
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <Box m={1} width={65} height={65} sx={{ backgroundColor: "grey.10" }}></Box>
            <Typography variant={"body1"} align={"center"}>
              10
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

import { Box, Link, Paper, Stack, Typography } from "design-system/components";

export default function Footer(props: { hideFooterShadow?: boolean }) {
  return (
    <>
      {!props.hideFooterShadow && (
        <Paper
          elevation={1}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingX: 2.5,
            paddingY: 1.5,
            borderRadius: 0,
            backgroundColor: "#fff",
            height: 28,
          }}
        />
      )}

      <Link href={"https://lightning.ai"} target={"_blank"} sx={{ textDecoration: "none", zIndex: 100 }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          padding={1.5}
          left={{ xs: 0, md: "unset" }}
          justifyContent={{ xs: "center", md: "flex-end" }}
          sx={{ backgroundColor: "#fff" }}>
          <Typography color={"initial"}>Running on</Typography>
          &nbsp;
          <Box
            component={"img"}
            src={"https://storage.googleapis.com/grid-static/lightning-logo-with-text.svg"}
            alt="Lightning.ai"
          />
        </Stack>
      </Link>
    </>
  );
}

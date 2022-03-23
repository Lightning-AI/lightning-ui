import { Box, Stack, Typography } from "../../design-system/components";
import AppDetails, { AppDetailsProps } from "./AppDetails";
import ComponentTable, { ComponentEntity } from "./ComponentTable";

export type AppOverviewProps = {
    appDetails: AppDetailsProps,
    components: ComponentEntity[],
}

const AppOverview = (props: AppOverviewProps) => (
    <Stack>
      <AppDetails {...props.appDetails} />
      <Box padding={2}></Box>
      <Typography variant={"h6"} sx={{fontFamily: "UCity"}}>App Components</Typography>
      <ComponentTable rows={props.components} />
    </Stack>
  );

export default AppOverview;
import { Stack, Typography } from "../../design-system/components";
import AppDetails, { AppDetailsProps } from "./AppDetails";
import ComponentTable, { ComponentEntity } from "./ComponentTable";

export type AppOverviewProps = {
  appDetails: AppDetailsProps;
  components: ComponentEntity[];
};

const AppOverview = (props: AppOverviewProps) => (
  <Stack>
    <AppDetails {...props.appDetails} />
    <Typography
      variant={"h6"}
      sx={{ fontFamily: `"Plus Jakarta Sans", sans-serif`, paddingTop: "14px", paddingBottom: "20px" }}>
      App Components
    </Typography>
    <ComponentTable rows={props.components} />
  </Stack>
);

export default AppOverview;

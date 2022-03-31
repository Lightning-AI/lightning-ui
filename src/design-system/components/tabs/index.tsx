import { ReactElement, useState } from "react";

import { Box, Divider } from "../";
import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";

import TabPanel from "./TabPanel";
import TabContent from "./TabContent";

export type TabItem = {
  content: ReactElement;
  title: string;
};

export type TabsProps = {
  selectedTab?: number;
  tabItems: TabItem[];
  variant?: "text" | "outlined";
  backgroundColor?: string;
};

const Tabs = (props: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(props.selectedTab || 0);

  return (
    <Box>
      <MuiTabs
        value={selectedTab}
        onChange={(e, value) => setSelectedTab(value)}
        variant={"scrollable"}
        sx={{ backgroundColor: props.backgroundColor }}>
        {props.tabItems.map(tabItem => (
          // @ts-ignore
          <MuiTab key={tabItem.title} label={tabItem.title} variant={props.variant} />
        ))}
      </MuiTabs>
      <Divider sx={{ margin: "0px -8px" }} />
      <Box paddingY={1.5}>
        {props.tabItems.map((tabItem, index) => (
          <TabPanel key={index.toString()} value={selectedTab} index={index}>
            <TabContent>{tabItem.content}</TabContent>
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

export default Tabs;

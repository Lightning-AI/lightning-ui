import MuiTabs from "@mui/material/Tabs";
import MuiTab, { TabProps as MuiTabProps } from "@mui/material/Tab";
import MuiTabContext from "@mui/lab/TabContext";
import MuiTabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { ReactElement, useState } from "react";

export type TabItem = {
  content: ReactElement;
  title: string;
};

export type TabsProps = {
  tabItems: TabItem[];
  variant?: "text" | "outlined";
};

const Tabs = (props: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState("0");

  return (
    <MuiTabContext value={selectedTab}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs value={selectedTab} onChange={(e, value) => setSelectedTab(value)} variant={"scrollable"}>
          {props.tabItems.map((tabItem, index) => (
            // @ts-ignore
            <MuiTab key={tabItem.title} label={tabItem.title} value={index.toString()} variant={props.variant} />
          ))}
        </MuiTabs>
      </Box>
      {props.tabItems.map((tabItem, index) => (
        <MuiTabPanel key={index.toString()} value={index.toString()}>
          {tabItem.content}
        </MuiTabPanel>
      ))}
    </MuiTabContext>
  );
};

export default Tabs;

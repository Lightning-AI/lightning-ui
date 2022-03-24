import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import MuiTabContext from "@mui/lab/TabContext";
import MuiTabPanel from "@mui/lab/TabPanel";
import { ReactElement, useState, useEffect } from "react";
import { Divider } from "../";

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
  const [selectedTab, setSelectedTab] = useState("0");
  useEffect(() => {
    const selectedTab =
      props.selectedTab && props.selectedTab < props.tabItems.length ? props.selectedTab.toString() : "0";
    setSelectedTab(selectedTab);
  }, [props.selectedTab, props.tabItems]);

  return (
    <MuiTabContext value={selectedTab}>
      <MuiTabs
        value={selectedTab}
        onChange={(e, value) => setSelectedTab(value)}
        variant={"scrollable"}
        sx={{ backgroundColor: props.backgroundColor }}>
        {props.tabItems.map((tabItem, index) => (
          // @ts-ignore
          <MuiTab key={tabItem.title} label={tabItem.title} value={index.toString()} variant={props.variant} />
        ))}
      </MuiTabs>
      <Divider sx={{ margin: "0px -8px" }} />
      {props.tabItems.map((tabItem, index) => (
        <MuiTabPanel key={index.toString()} value={index.toString()}>
          {tabItem.content}
        </MuiTabPanel>
      ))}
    </MuiTabContext>
  );
};

export default Tabs;

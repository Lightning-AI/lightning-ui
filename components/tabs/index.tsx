import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Divider, SxProps, Theme } from "../";
import TabContent from "./TabContent";
import TabPanel from "./TabPanel";

type StaticTabItem = {
  title: string;
  content: ReactNode;
};

type NavigableTabItem = {
  title: string;
  href: string;
  content?: ReactNode;
};

export type TabItem = StaticTabItem | NavigableTabItem;

export type TabsProps = {
  selectedTab?: number;
  tabItems: TabItem[];
  variant?: "text" | "outlined";
  divider?: boolean;
  sxTabs?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
  onTabChanged?: (tab: number) => void;
};

const Tabs = ({ divider = true, ...props }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(props.selectedTab || 0);

  const navigate = useNavigate();
  const location = useLocation();

  const onTabChangeHandler = (event: any, value: number) => {
    props.onTabChanged?.(value);
    setSelectedTab(value);
  };

  const navigateHandler = (url: string, value: number): MouseEventHandler<HTMLButtonElement> => {
    return event => {
      event.preventDefault();
      onTabChangeHandler(event, value);
      navigate(url);
    };
  };

  const hasContent = props.tabItems.some((tabItem: any) => typeof tabItem.content !== "undefined");
  const locationUri = location.pathname + location.hash + location.search;
  const hrefIndex = props.tabItems.findIndex((tabItem: any) => tabItem.href === locationUri);

  useEffect(() => {
    const newSelectedTab = hrefIndex !== -1 ? hrefIndex : 0;
    setSelectedTab(newSelectedTab);
    props.onTabChanged?.(newSelectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to call this on onTabChanged change
  }, [hrefIndex, locationUri]);

  return (
    <Box>
      <MuiTabs
        value={selectedTab}
        onChange={onTabChangeHandler}
        variant={"scrollable"}
        sx={{ ...props.sxTabs, "& .MuiTabs-indicator": { height: divider ? "4px" : "2px" } }}>
        {props.tabItems.map((tabItem: any, index) => (
          // @ts-ignore
          <MuiTab
            key={tabItem.title}
            label={tabItem.title}
            variant={props.variant}
            onClick={tabItem.href && navigateHandler(tabItem.href, index)}
          />
        ))}
      </MuiTabs>
      {divider && <Divider />}
      {hasContent && (
        <Box paddingTop={3} paddingBottom={1.5} sx={props.sxContent}>
          {props.tabItems.map((tabItem: any, index) => (
            <TabPanel key={index.toString()} value={selectedTab} index={index}>
              <TabContent>{tabItem.content}</TabContent>
            </TabPanel>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Tabs;

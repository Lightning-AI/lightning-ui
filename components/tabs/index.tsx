import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

import MuiTab from "@mui/material/Tab";
import MuiTabs from "@mui/material/Tabs";
import { useLocation, useNavigate } from "react-router-dom";

import { Tooltip } from "..";
import { Box, Divider, SxProps, Theme } from "../";
import TabContent from "./TabContent";
import TabPanel from "./TabPanel";

type TabItemMetadata = {
  title: string;
  disabled?: boolean;
  tooltip?: string;
};

type StaticTabItem = {
  content: ReactNode;
};

type NavigableTabItem = {
  path: string;
  content?: ReactNode;
};

export type TabItem = (StaticTabItem | NavigableTabItem) & TabItemMetadata;

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
  const [selectedTab, setSelectedTab] = useState(
    props.selectedTab || props.tabItems.findIndex(tabItem => !tabItem.disabled),
  );

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
  const pathIndex = props.tabItems.findIndex((tabItem: any) => tabItem.path === location.pathname);

  useEffect(() => {
    const newSelectedTab = pathIndex !== -1 ? pathIndex : props.tabItems.findIndex(tabItem => !tabItem.disabled);
    setSelectedTab(newSelectedTab);
    props.onTabChanged?.(newSelectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to call this on onTabChanged change
  }, [pathIndex, location.pathname]);

  return (
    <Box>
      <MuiTabs
        value={selectedTab}
        onChange={onTabChangeHandler}
        variant={"scrollable"}
        sx={{ ...props.sxTabs, "& .MuiTabs-indicator": { height: divider ? "4px" : "2px" } }}>
        {props.tabItems.map((tabItem: any, index) => {
          const tab = (
            // @ts-ignore
            <MuiTab
              key={tabItem.title}
              label={tabItem.title}
              variant={props.variant}
              disabled={tabItem.disabled}
              onClick={tabItem.path && navigateHandler(tabItem.path, index)}
            />
          );

          if (tabItem.tooltip) {
            // If tab is disabled then the span will trigger user interactions to open the tooltip
            return (
              <Tooltip key={tabItem.title} title={tabItem.tooltip}>
                <span>{tab}</span>
              </Tooltip>
            );
          }
          return tab;
        })}
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

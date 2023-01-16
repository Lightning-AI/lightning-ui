import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

import { TabContext, TabPanel } from "@mui/lab";
import { Tab as MuiTab, Tabs as MuiTabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { Tooltip } from "..";
import { Box, Divider, SxProps, Theme } from "../";

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
  /**
   * @default true
   */
  prerenderTabs?: boolean;
  divider?: boolean;
  sxTabs?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
  onTabChanged?: (tab: number) => void;
};

const Tabs = ({
  selectedTab: propSelectedTab,
  tabItems,
  variant,
  sxTabs,
  sxContent,
  onTabChanged,
  prerenderTabs = true,
  divider = true,
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(propSelectedTab || tabItems.findIndex(tabItem => !tabItem.disabled));

  const navigate = useNavigate();
  const location = useLocation();

  const onTabChangeHandler = (event: any, value: number) => {
    onTabChanged?.(value);
    setSelectedTab(value);
  };

  const navigateHandler = (url: string, value: number): MouseEventHandler<HTMLButtonElement> => {
    return event => {
      event.preventDefault();
      onTabChangeHandler(event, value);
      navigate(url);
    };
  };

  const hasContent = tabItems.some(tabItem => typeof tabItem.content !== "undefined");
  const pathIndex = tabItems.findIndex(tabItem => "path" in tabItem && tabItem.path === location.pathname);

  useEffect(() => {
    const newSelectedTab = pathIndex !== -1 ? pathIndex : tabItems.findIndex(tabItem => !tabItem.disabled);
    setSelectedTab(newSelectedTab);
    onTabChanged?.(newSelectedTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we don't want to call this on onTabChanged change
  }, [pathIndex, location.pathname]);

  return (
    <TabContext value={selectedTab.toString()}>
      <MuiTabs
        value={selectedTab}
        onChange={onTabChangeHandler}
        variant={"scrollable"}
        sx={{ ...sxTabs, "& .MuiTabs-indicator": { height: divider ? "4px" : "2px" } }}>
        {tabItems.map((tabItem, index) => {
          const tab = (
            // @ts-ignore
            <MuiTab
              key={tabItem.title}
              label={tabItem.title}
              variant={variant}
              disabled={tabItem.disabled}
              onClick={"path" in tabItem && navigateHandler(tabItem.path, index)}
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
        <Box paddingTop={3} paddingBottom={1.5} sx={sxContent}>
          {tabItems.map((tabItem, index) => (
            <TabPanel key={tabItem.title} value={index.toString()}>
              {prerenderTabs || selectedTab === index ? tabItem.content : null}
            </TabPanel>
          ))}
        </Box>
      )}
    </TabContext>
  );
};

export default Tabs;

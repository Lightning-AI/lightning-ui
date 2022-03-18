import React from "react";
import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

import useLightningState from "hooks/useLightningState";
import { routesFor } from "utils/state";
import { purple } from "lightning-colors";
import { LayoutBranch } from "types/lightning";

const StyledMuiTabs = styled(MuiTabs)({
  "marginBottom": "0",
  ".MuiTab-root": {
    "fontSize": "14px",
    "textTransform": "none",
    "&.Mui-selected": {
      color: purple,
    },
  },
  ".MuiTabs-indicator": {
    background: purple,
    height: "4px",
  },
});

type LinkTabProps = {
  label: string;
  href: string;
};

function LinkTab(props: LinkTabProps) {
  const navigate = useNavigate();

  return (
    <MuiTab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
}

export default function Tabs() {
  const location = useLocation();
  const lightningState = useLightningState();

  if (lightningState.isLoading || lightningState.data === undefined) {
    return null;
  }

  const routes = routesFor(lightningState.data) as LayoutBranch[];
  const activeTabIndex = routes.findIndex(r => `/view/${encodeURIComponent(r.name)}` === location.pathname);

  return (
    <StyledMuiTabs value={activeTabIndex}>
      {routes.map(route => (
        <LinkTab key={route.name} label={route.name.toUpperCase()} href={`/view/${encodeURIComponent(route.name)}`} />
      ))}
    </StyledMuiTabs>
  );
}

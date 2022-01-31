import React from "react";
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

import useLightingState from "hooks/useLightningState";
import { routesFor } from "utils/state";
import { purple } from "lightning-colors";
import { LayoutBranch, LayoutLeaf } from "types/lightning";

const StyledMuiTabs = styled(MuiTabs)({
  marginBottom: "8px",
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
  label?: string;
  external: boolean;
  href: string;
};

function LinkTab(props: LinkTabProps) {
  const navigate = useNavigate();

  return (
    <MuiTab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!props.external) {
          event.preventDefault();

          navigate(props.href);
        }        
      }}
      {...props}
    />
  );
}

export default function Tabs() {
  const location = useLocation();
  const lightningState = useLightingState();

  if (lightningState.isLoading || lightningState.data === undefined) {
    return null;
  }

  const routes = routesFor(lightningState.data);
  const internalLinks = routes.filter(route => (route as LayoutLeaf).target === undefined) as LayoutBranch[];
  const externalLinks = routes.filter(route => (route as LayoutLeaf).target !== undefined) as LayoutLeaf[];
  const activeTabIndex = internalLinks.findIndex(r => `/${r.name}` === location.pathname);

  return (
    <StyledMuiTabs value={activeTabIndex}>
      {internalLinks.map(route => (
        <LinkTab 
          key={route.name} 
          label={route.name.toUpperCase()}
          href={`/${route.name}`}
          external={false}
        />
      ))}
      {externalLinks.map(route => (
        <LinkTab 
          key={route.name} 
          label={route.name.toUpperCase()}
          href={route.target}
          external={true}
        />
      ))}
    </StyledMuiTabs>
  );
}

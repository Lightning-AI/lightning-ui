import React from "react";
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

import { purple } from "lightning-colors";

const StyledMuiTabs = styled(MuiTabs)({
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

const routes = [
  {
    name: "Components",
    href: ""
  },
];

export default function AdminTabs() {
  const location = useLocation();

  const activeTabIndex = routes.findIndex(r => `/admin${r.href}` === location.pathname);

  return (
    <StyledMuiTabs value={activeTabIndex}>
      {routes.map(route => (
        <LinkTab 
          key={route.name}
          label={route.name.toUpperCase()}
          href={`/admin${route.href}`}
        />
      ))}
    </StyledMuiTabs>
  );
}

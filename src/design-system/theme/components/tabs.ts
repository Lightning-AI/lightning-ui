const tabs: any = {
  MuiTabs: {
    styleOverrides: {
      indicator: {
        transition: "none",
      },
    },
  },
  MuiTab: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ ownerState, theme }: any) => {
        return {
          "textTransform": "none",
          "fontSize": "14px",
          "&.MuiTab-root.Mui-selected": {
            border: ownerState.variant === "outlined" && "1px solid",
            borderRadius: "8px 8px 0 0",
            borderColor: theme.palette.divider,
            backgroundColor: ownerState.variant === "outlined" ? "white" : theme.palette.primary[5],
            color: theme.palette.primary[50],
            background: ownerState.variant === "outlined" ? "white" : theme.palette.primary[5],
          },
        };
      },
    },
  },
  MuiTabPanel: {
    styleOverrides: {
      root: {
        padding: "12px 0px",
      },
    },
  },
};

export default tabs;

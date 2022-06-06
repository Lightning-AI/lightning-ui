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
          "&.Mui-selected": {
            border: ownerState.variant === "outlined" && "1px solid",
            borderRadius: "6px 6px 0 0",
            borderColor: theme.palette.divider,
            backgroundColor: ownerState.variant === "outlined" && "white",
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

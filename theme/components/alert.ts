const alert: any = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }: any) => {
        return {
          padding: "12px 20px 12px 12px",
          borderRadius: "8px",
          borderColor: theme.palette.divider,
        };
      },
      icon: {
        "marginRight": "8px",
        "& svg": {
          fontSize: "16px",
        },
      },
      action: {
        "& svg": {
          fontSize: "16px",
        },
      },
    },
  },
};

export default alert;

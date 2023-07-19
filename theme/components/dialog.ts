const dialog: any = {
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }: any) => {
        const isDark = theme.palette.mode === "dark";
        return {
          "button:hover svg[data-testid='CloseIcon']": {
            color: theme.palette.primary[50],
          },
          ...(isDark && {
            "*:hover::-webkit-scrollbar-thumb": {
              background: theme.palette.primary[60],
            },
            "*:hover::-webkit-scrollbar-track": {
              background: theme.palette.grey[20],
              boxShadow: "none",
            },
            "*:hover::-webkit-scrollbar-corner": { background: theme.palette.common.black },
            "*::-webkit-scrollbar-corner": { background: theme.palette.background.default },
          }),
        };
      },
    },
  },
};

export default dialog;

const dialog: any = {
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }: any) => {
        return {
          "button:hover svg[data-testid='CloseIcon']": {
            color: theme.palette.primary[50],
          },
        };
      },
    },
  },
};

export default dialog;

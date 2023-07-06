const popover: any = {
  MuiPopover: {
    styleOverrides: {
      root: ({ theme }: any) => {
        return {
          ".MuiPaper-root": {
            backgroundImage: "none",
          },
        };
      },
    },
  },
};

export default popover;

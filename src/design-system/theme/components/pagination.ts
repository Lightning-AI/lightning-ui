const pagination: any = {
  MuiPaginationItem: {
    defaultProperties: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }: any) => {
        return {
          "&.Mui-selected": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary["10"],
          },
          "&.Mui-selected:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary["20"],
          },
        };
      },
    },
  },
};

export default pagination;

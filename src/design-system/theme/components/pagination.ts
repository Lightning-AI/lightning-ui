const pagination: any = {
  MuiPaginationItem: {
    defaultProperties: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }: any) => {
        return {
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&.MuiPaginationItem-page": {
            width: "20px",
            height: "40px",
          },
          "&.MuiPaginationItem-page:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary["20"],
          },
          "&.Mui-selected": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary["10"],
          },
          "&.Mui-selected:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary["10"],
          },
        };
      },
    },
  },
};

export default pagination;

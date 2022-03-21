const button: any = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      variant: "contained",
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: "6px",
        boxShadow: "none",
      },
    },
  },
};

export default button;

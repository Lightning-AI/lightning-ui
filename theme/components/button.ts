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
        borderRadius: "20px",
        boxShadow: "none",
      },
    },
  },
};

export default button;

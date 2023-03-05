const tooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }: any) => {
        return {
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "20px",
          borderRadius: "8px",
          padding: "8px",
          maxWidth: "360px",
          backgroundColor: theme.palette.primary[40],
          color: theme.palette.common.white,
          wordBreak: "normal",
        };
      },
    },
  },
};

export default tooltip;

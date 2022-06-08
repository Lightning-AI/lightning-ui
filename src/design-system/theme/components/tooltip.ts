const tooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }: any) => {
        return {
          fontFamily: "Roboto",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "20px",
          borderRadius: "8px",
          maxWidth: "360px",
          backgroundColor: theme.palette.grey[70],
          color: theme.palette.grey[20],
          wordBreak: "normal",
        };
      },
    },
  },
};

export default tooltip;

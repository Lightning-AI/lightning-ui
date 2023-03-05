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
          backgroundColor: theme.palette.grey[40],
          color: theme.palette.text.secondary,
          wordBreak: "normal",
        };
      },
    },
  },
};

export default tooltip;

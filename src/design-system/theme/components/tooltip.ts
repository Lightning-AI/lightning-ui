const tooltip = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }: any) => {
        return {
          fontWeight: "500",
          fontStyle: "normal",
          fontSize: "13px",
          lineHeight: "20px",
          borderRadius: "8px",
          padding: "8px",
          maxWidth: "360px",
          boxShadow: theme.palette.grey.shadow,
          backgroundColor: theme.palette.grey.oppositeBackground,
          border: `0.5px solid ${theme.palette.grey[10]}`,
          color: theme.palette.primary.oppositeMainText,
          wordBreak: "normal",
        };
      },
    },
  },
};

export default tooltip;

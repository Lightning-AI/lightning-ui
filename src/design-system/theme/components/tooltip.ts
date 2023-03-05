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
          boxShadow: theme.palette.grey.shadow,
          backgroundColor: theme.palette.grey.oppositeBackground,
          border: `1px solid ${theme.palette.grey[20]}` ,
          color: 'red',
          wordBreak: "normal",
        };
      },
    },
  },
};

export default tooltip;

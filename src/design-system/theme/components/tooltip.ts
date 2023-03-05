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
          boxShadow: '0px 3px 5px -1px rgba(45, 64, 86, 0.2), 0px 6px 10px rgba(45, 64, 86, 0.14), 0px 1px 18px rgba(45, 64, 86, 0.12);',
          backgroundColor: theme.palette.grey.shadow,
          color: theme.palette.common.white,
          wordBreak: "normal",
        };
      },
    },
  },
};

export default tooltip;

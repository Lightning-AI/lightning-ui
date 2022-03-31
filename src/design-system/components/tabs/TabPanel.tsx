import { Box } from "../";
function TabPanel(props: any) {
  const { children, value, index } = props;

  return (
    <Box role="tabpanel" hidden={value !== index}>
      {children}
    </Box>
  );
}

export default TabPanel;

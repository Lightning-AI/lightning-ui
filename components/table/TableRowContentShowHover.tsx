import { Box } from "@mui/material";

type TableRowContentShowOnHoverProps = {
  children: React.ReactNode;
  showAlways?: boolean;
};

export const TableRowContentShowOnHoverClass = "LaiTableRowContentShowOnHover";

export function TableRowContentShowOnHoverWrapper({ children, showAlways }: TableRowContentShowOnHoverProps) {
  return (
    <Box display={"inline"} className={showAlways ? undefined : TableRowContentShowOnHoverClass}>
      {children}
    </Box>
  );
}

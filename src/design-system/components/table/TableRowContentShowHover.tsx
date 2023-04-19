import { Box } from "@mui/material";

type TableRowContentShowOnHoverProps = {
  children: React.ReactNode;
};

export const TableRowContentShowOnHoverClass = "LaiTableRowContentShowOnHover";

export function TableRowContentShowOnHoverWrapper({ children }: TableRowContentShowOnHoverProps) {
  return <Box className={TableRowContentShowOnHoverClass}>{children}</Box>;
}

import { ReactNode } from "react";

import MuiTable from "@mui/material/Table";
import MuiTableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableContainer from "@mui/material/TableContainer";
import MuiTableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";

import { Box, BoxProps } from "..";
import TableRow from "./TableRow";
import { TableRowContentShowOnHoverClass } from "./TableRowContentShowHover";

const tableCellHeaderStyle = {
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "20px",
  color: (theme: any) => theme.palette.text.secondary,
  padding: "8px 16px",
};

export type TableProps = {
  header?: ReactNode[];
  rows: ReactNode[][];
  rowDetails?: ReactNode[];
  rowHover?: boolean;
  rowClick?: any;
  border?: boolean;
  sticky?: boolean;
  sx?: BoxProps["sx"];
};

const Table = (props: TableProps) => {
  const theme: any = useTheme();
  return (
    <MuiTableContainer>
      <Box
        sx={{
          [`& .MuiTableRow-root:hover .${TableRowContentShowOnHoverClass}`]: {
            opacity: 1,
            transition: "0.2s ease-in-out",
          },
          [`& .MuiTableRow-root .${TableRowContentShowOnHoverClass}`]: {
            opacity: 0,
            transition: "0.2s ease-in-out",
          },
          ...(props.border
            ? {
                padding: "24px",
                margin: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                minWidth: "fit-content",
              }
            : {}),
          ...props.sx,
          ...(props.sticky && {
            th: {
              position: "sticky",
              top: "0",
              zIndex: 2,
              background: theme.palette.background.default,
            },
            tbody: {
              overflow: "auto",
              height: "100%",
              maxHeight: "100%",
            },
            overflow: "auto",
            height: "100%",
            maxHeight: "100%",
            position: "relative",
          }),
        }}>
        <MuiTable>
          <MuiTableHead>
            <MuiTableRow>
              {props.header?.map((cell, index) => (
                <MuiTableCell key={index} sx={tableCellHeaderStyle}>
                  {cell}
                </MuiTableCell>
              ))}
              {props.rowDetails && <MuiTableCell width={"10px"} sx={tableCellHeaderStyle}></MuiTableCell>}
            </MuiTableRow>
          </MuiTableHead>
          <MuiTableBody>
            {props.rows.map((row, index) => (
              <TableRow key={index} hover={!!props.rowHover} cells={row} details={props.rowDetails?.[index]} />
            ))}
          </MuiTableBody>
        </MuiTable>
      </Box>
    </MuiTableContainer>
  );
};

export default Table;

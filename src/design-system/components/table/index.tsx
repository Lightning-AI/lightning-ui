import { ReactNode } from "react";

import MuiTable from "@mui/material/Table";
import MuiTableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableContainer from "@mui/material/TableContainer";
import MuiTableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";

import { Box } from "..";
import TableRow from "./TableRow";

const tableCellHeaderStyle = {
  fontFamily: `"Plus Jakarta Sans", sans-serif`,
  fontWeight: 600,
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#5B5E69",
  padding: "8px 16px",
};

export type TableProps = {
  header?: ReactNode[];
  rows: ReactNode[][];
  rowDetails?: ReactNode[];
  rowHover?: boolean;
  border?: boolean;
};

const Table = (props: TableProps) => {
  return (
    <MuiTableContainer>
      <Box
        sx={
          props.border
            ? {
                padding: "24px",
                margin: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                minWidth: "fit-content",
              }
            : {}
        }>
        <MuiTable>
          <MuiTableHead sx={{ boxShadow: "inset 0px -2px 0px #65676B;" }}>
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

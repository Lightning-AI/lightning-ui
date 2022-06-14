import MuiTableContainer from "@mui/material/TableContainer";
import MuiTable from "@mui/material/Table";
import MuiTableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableBody from "@mui/material/TableBody";
import { ReactNode } from "react";
import TableRow from "./TableRow";

const tableCellHeaderStyle = {
  fontFamily: "Ucity",
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
};

const Table = (props: TableProps) => {
  return (
    <MuiTableContainer>
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
            <TableRow hover={!!props.rowHover} cells={row} details={props.rowDetails?.[index]} />
          ))}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
};

export default Table;

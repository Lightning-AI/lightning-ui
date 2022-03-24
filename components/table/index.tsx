import MuiTableContainer from "@mui/material/TableContainer";
import MuiTable from "@mui/material/Table";
import MuiTableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableBody from "@mui/material/TableBody";
import { ReactNode } from "react";

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
          </MuiTableRow>
        </MuiTableHead>
        <MuiTableBody>
          {props.rows.map((row, index) => (
            <MuiTableRow key={index} sx={{ boxShadow: "inset 0px -1px 0px #EBEDF3;" }}>
              {row.map((cell, index) => (
                <MuiTableCell key={index}>{cell}</MuiTableCell>
              ))}
            </MuiTableRow>
          ))}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
};

export default Table;

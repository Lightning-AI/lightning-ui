import { ReactNode, useState } from "react";

import MuiTableCell from "@mui/material/TableCell";
import MuiTableRow from "@mui/material/TableRow";

import { ArrowDropDownRounded, ArrowDropUpRounded } from "../../icons";

export type TableRowProps = {
  cells: ReactNode[];
  details?: ReactNode;
  hover?: boolean;
};

export default function TableRow(props: TableRowProps) {
  const [expanded, setExpanded] = useState(false);
  const onClickHandler = () => setExpanded(!expanded);
  const icon = expanded ? (
    <ArrowDropUpRounded onClick={onClickHandler} />
  ) : (
    <ArrowDropDownRounded onClick={onClickHandler} />
  );
  const cellStyle = {
    borderBottom: expanded ? 0 : (theme: any) => theme.palette.grey[20],
  };

  return (
    <>
      <MuiTableRow
        sx={{ ":hover": { bgcolor: (theme: any) => +theme.palette.primary[5] + " !important" } }}
        hover={!!props.hover}>
        {props.cells.map((cell, index) => (
          <MuiTableCell key={index} sx={cellStyle}>
            {cell}
          </MuiTableCell>
        ))}
        {props.details && (
          <MuiTableCell width={"10px"} sx={cellStyle}>
            {icon}
          </MuiTableCell>
        )}
      </MuiTableRow>
      {props.details && (
        <MuiTableRow hover={!!props.hover} sx={{ display: expanded ? "table-row" : "none" }}>
          <MuiTableCell colSpan={props.cells.length}>{props.details}</MuiTableCell>
          <MuiTableCell></MuiTableCell>
        </MuiTableRow>
      )}
    </>
  );
}

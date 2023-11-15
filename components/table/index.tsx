import { ReactNode } from "react";

import MuiTable from "@mui/material/Table";
import MuiTableBody from "@mui/material/TableBody";
import MuiTableCell, { TableCellProps as MuiTableCellProps } from "@mui/material/TableCell";
import MuiTableContainer from "@mui/material/TableContainer";
import MuiTableHead from "@mui/material/TableHead";
import MuiTableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import { List } from "react-virtualized";

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

type VirtualizedParams = {
  enabled: boolean;
  rowHeightPx: number;
  headerHeightPx: number;
  widthPx: number;
  heightPx: number;
  columnWidthsPx: number[];
  overscanRowCount?: number;
};

export type TableProps = {
  header?: ReactNode[];
  rows: ReactNode[][];
  rowDetails?: ReactNode[];
  rowHover?: boolean;
  rowClick?: any;
  border?: boolean;
  sticky?: boolean;
  // if using virtualized table, you may want to wrap it with `AutoSizer`, depending on the context
  virtualizedParams?: VirtualizedParams;
  sx?: BoxProps["sx"];
};

const Table = ({ virtualizedParams, ...props }: TableProps) => {
  const theme: any = useTheme();
  if (virtualizedParams?.enabled && props.rowDetails) {
    throw new Error("rowDetails is not supported when using virtualized");
  }
  const columnCount: number | undefined = props.header?.length ?? props.rows[0]?.length;
  if (virtualizedParams?.enabled && columnCount && virtualizedParams.columnWidthsPx.length !== columnCount) {
    // TODO(yurij/alec): support virtualized tables with variable column widths
    throw new Error("virtualized table should have all column widths specified");
  }
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
          ".MuiTableCell-root": { overflow: "hidden", textOverflow: "ellipsis" },
          "th.MuiTableCell-head, .MuiTableCell-head": { overflow: "visible" },
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
            "th": {
              position: "sticky",
              top: "0",
              zIndex: 2,
              background: theme.palette.background.default,
            },
            "th:has([data-testid='checkbox'])": {
              zIndex: "999 !important" as any,
            },
            "tbody": {
              overflow: "auto",
              height: "100%",
              maxHeight: "100%",
            },
            "overflow": "auto",
            "height": "100%",
            "maxHeight": "100%",
            "position": "relative",
          }),
        }}>
        <MuiTable
          sx={{
            ...(virtualizedParams?.enabled
              ? {
                  ".MuiTableRow-root": { width: "100%", display: "flex" },
                  ".MuiTableCell-root": { display: "flex", flexGrow: 1, alignItems: "center" },
                  ...virtualizedParams.columnWidthsPx.reduce(
                    (style, width, index) => {
                      style[`.MuiTableCell-root:nth-child(${index + 1})`] = { width: `${width}px` };
                      return style;
                    },
                    {} as Record<string, MuiTableCellProps["sx"]>,
                  ),
                }
              : undefined),
          }}>
          <MuiTableHead
            sx={{
              ...(virtualizedParams?.enabled
                ? {
                    width: virtualizedParams.widthPx,
                    display: "inline-block",
                  }
                : undefined),
            }}>
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
            {virtualizedParams?.enabled ? (
              <List
                width={virtualizedParams.widthPx}
                height={virtualizedParams.heightPx - virtualizedParams.headerHeightPx}
                rowCount={props.rows.length}
                rowHeight={virtualizedParams.rowHeightPx}
                overscanRowCount={virtualizedParams.overscanRowCount}
                rowRenderer={({ index, key, style }) => (
                  <Box key={key} style={style}>
                    <TableRow hover={!!props.rowHover} cells={props.rows[index] || []} />
                  </Box>
                )}
              />
            ) : (
              props.rows.map((row, index) => (
                <TableRow key={index} hover={!!props.rowHover} cells={row} details={props.rowDetails?.[index]} />
              ))
            )}
          </MuiTableBody>
        </MuiTable>
      </Box>
    </MuiTableContainer>
  );
};

export default Table;

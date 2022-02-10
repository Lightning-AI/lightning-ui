import React from "react";
import { Column, useTable } from "react-table";
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";

import useLightningSpec from "hooks/useLightningSpec";
import { ComponentSpec } from "types/lightning";

type ComponentTableProps = {
  data: ComponentSpec[];
};

const columns: Column<ComponentSpec>[] = [
  {
    Header: "Name",
    accessor: "cls_name",
    Cell: ({ value }) => <code>{value}</code>,
  },
];

function ComponentTable(props: ComponentTableProps) {
  const { data } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <TableContainer>
      <MuiTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}>{column.render("Header")}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <TableCell {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default function Components() {
  const lightningSpec = useLightningSpec();

  if (lightningSpec.isLoading) {
    return <div>Loading...</div>;
  }

  if (!lightningSpec.data || lightningSpec.data.length === 0) {
    return (
      <Box sx={{ marginBottom: "46px" }}>
        <span>No components defined</span>
      </Box>
    );
  }

  return (
    <Box sx={{ marginBottom: "46px" }}>
      <ComponentTable data={lightningSpec.data ?? []} />
    </Box>
  );
}

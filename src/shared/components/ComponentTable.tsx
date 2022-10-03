import React, { ReactNode } from "react";

import { Table } from "../../design-system/components";
import ComponentStatus, { StatusEnum } from "./Status";

export type ComponentEntity = {
  status: StatusEnum;
  statusMessage?: string;
  name: string;
  type: string;
  provider: string;
  lastStartTime?: string;
};

export type ComponentTableProps = {
  rows: ComponentEntity[];
};

const header: ReactNode[] = ["Status", "Name", "Type", "Source", "Last Run"];
const getComponentCell = (component: ComponentEntity): ReactNode[] => {
  const cell = [
    <ComponentStatus status={component.status} message={component.statusMessage} />,
    component.name,
    component.type,
    component.provider,
    component.lastStartTime ?? "--",
  ];
  return cell;
};

const ComponentTable = (props: ComponentTableProps) => {
  const rows: ReactNode[][] = props.rows.map(getComponentCell);
  return <Table header={header} rows={rows} />;
};

export default ComponentTable;

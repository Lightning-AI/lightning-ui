import React, { ReactNode } from "react";
import { Table, Box } from "design-system/components";

import useLightningSpec from "hooks/useLightningSpec";

const Container = ({ children }: { children: ReactNode }) => <Box sx={{ marginBottom: "46px" }}>{children}</Box>;

export default function Components() {
  const lightningSpec = useLightningSpec();

  if (lightningSpec.isLoading) {
    return <div>Loading...</div>;
  }

  if (!lightningSpec.data || lightningSpec.data.length === 0) {
    return (
      <Container>
        <span>No components defined</span>
      </Container>
    );
  }

  const rows = lightningSpec.data?.map(cell => [<code>{cell.cls_name}</code>]);

  return (
    <Container>
      <Table header={["Name"]} rows={rows} />
    </Container>
  );
}

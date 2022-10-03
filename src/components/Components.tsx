import React, { ReactNode } from "react";

import { Box, Table } from "design-system/components";

import useLightningSpec from "hooks/useLightningSpec";

const Container = ({ children }: { children: ReactNode }) => <Box sx={{ marginBottom: "46px" }}>{children}</Box>;

const getComponentName = ({ affiliation, cls_name }: { affiliation: string[]; cls_name: string }) => {
  const lastAffiliation = affiliation.slice(-1)[0];
  return `${cls_name} (${lastAffiliation})`;
};

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

  const firstLevelComponents = lightningSpec.data?.filter(component => component.affiliation.length <= 2);
  const rows = firstLevelComponents.map(component => [<>{getComponentName(component)}</>]);

  return (
    <Container>
      <Table header={["Name"]} rows={rows} />
    </Container>
  );
}

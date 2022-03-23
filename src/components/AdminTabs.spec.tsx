import React from "react";

import mount from "tests/utils/testMount";
import AdminTabs from "./AdminTabs";

describe("AdminTabs", () => {
  const appOverviewTitle = "App Overview";
  const componentsTitle = "Components";

  it("renders the correct tabs", () => {
    mount(<AdminTabs />);

    cy.contains(appOverviewTitle).should("be.visible");
    cy.contains(componentsTitle).should("be.visible");
  });
});

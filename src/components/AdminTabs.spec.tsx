import React from "react";

import mount from "tests/utils/testMount";
import AdminTabs from "./AdminTabs";

describe("AdminTabs", () => {
  it("renders the correct tabs", () => {
    mount(<AdminTabs />);

    cy.contains("Components").should("be.visible");
  });
});

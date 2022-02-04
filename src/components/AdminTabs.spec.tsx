import React from "react";

import mount from "tests/utils/testMount";
import AdminTabs from "./AdminTabs";

describe("AdminTabs", () => {
  const title = "Components";

  it("renders the correct tabs", () => {
    mount(<AdminTabs />);

    cy.contains(title.toUpperCase()).should("be.visible");
  });
});

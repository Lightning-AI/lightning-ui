import React from "react";

import mount from "tests/utils/testMount";

import Status, { StatusEnum } from "../../shared/components/Status";

describe("Status", () => {
  it("displays status message on info icon hover", () => {
    mount(<Status status={StatusEnum.FAILED} message={"A very informative and actionable failure description."} />);

    cy.contains("A very informative and actionable failure description.").should("not.exist");
    cy.get(`svg[data-testid="InfoRoundedIcon"]`).trigger("mouseover");
    cy.contains("A very informative and actionable failure description.");
  });
});

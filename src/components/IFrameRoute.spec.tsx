import React from "react";

import mount from "tests/utils/testMount";

import IFrameRoute from "./IFrameRoute";

describe("IFrameRoute", () => {
  it("renders an <iframe> element for the given route", () => {
    mount(<IFrameRoute name="test" iframeTargetUrl="http://lightning.ai" />);

    cy.get("iframe").should("have.attr", "name", "test");
    cy.get("iframe").should("have.attr", "src", "http://lightning.ai");
  });

  it("renders loading spinner if <iframe> target URL is not populated yet", () => {
    mount(<IFrameRoute name="test" iframeTargetUrl={""} />);

    cy.get("iframe").should("not.exist");
    cy.get("[data-testid=loading-spinner]").should("be.visible");
  });

  it("renders loading spinner if <iframe> is not available", () => {
    const targetUrl = `http://${window.location.host}/frontend`;

    cy.intercept(targetUrl, { statusCode: 503 }).as("fetch");

    mount(<IFrameRoute name="test" iframeTargetUrl={targetUrl} />);

    cy.wait("@fetch");

    cy.get("iframe").should("not.exist");
    cy.get("[data-testid=loading-spinner]").should("be.visible");
  });

  it("does not render a loading spinner if the target URL is not fetchable", () => {
    mount(<IFrameRoute name="test" iframeTargetUrl="http://lightning.ai" />);

    cy.get("[data-testid=loading-spinner]").should("not.exist");
    cy.get("iframe").should("be.visible");
  });

  it("refetches the target URL on an interval to check if it is still available", () => {
    const targetUrl = `http://${window.location.host}/frontend`;

    cy.clock();

    cy.intercept(targetUrl, { statusCode: 503 }).as("fetch");

    mount(<IFrameRoute name="test" iframeTargetUrl={targetUrl} />);

    new Array(5).fill(0).forEach(() => {
      cy.tick(1000);

      cy.wait("@fetch");
    });
  });
});

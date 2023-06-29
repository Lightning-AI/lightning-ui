import { mount } from "@cypress/react";

import { PrerenderableTabPanel } from ".";
import { Box } from "..";

describe("PrerenderableTabPanel", () => {
  /**
   * Having "display: none" or "visibility: hidden" or having size smaller than 4px in any dimension
   * disables a lot of web preloading features. We want to avoid this for our prerendered tabs.
   */
  it(`doesn't have neither "display: none", nor "visibility: hidden" and has min size if it's inactive`, () => {
    mount(
      <PrerenderableTabPanel index={0} selectedIndex={1}>
        tab content
      </PrerenderableTabPanel>,
    );
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.have.css", "display", "none");
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.have.css", "visibility", "hidden");
    cy.get("[data-testid=prerenderable-tab-panel]").should("have.css", "opacity", "0");
    cy.get("[data-testid=prerenderable-tab-panel]").should("have.css", "zIndex", "-100500");
    cy.get("[data-testid=prerenderable-tab-panel]").should("have.css", "position", "absolute");
  });

  it(`doesn't have any hiding styles and min size if it's active`, () => {
    mount(
      <PrerenderableTabPanel index={0} selectedIndex={0}>
        tab content
      </PrerenderableTabPanel>,
    );
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.have.css", "display", "none");
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.have.css", "visibility", "hidden");
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.have.css", "opacity", "0");
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.have.css", "zIndex", "-100500");
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.have.css", "position", "absolute");
  });

  it(`maintains size if it's inactive`, () => {
    mount(
      // PrerenderableTabPanel container should have `position: relative`
      <Box width={"600px"} height={"400px"} position={"relative"}>
        <PrerenderableTabPanel index={0} selectedIndex={1}>
          tab content
        </PrerenderableTabPanel>
      </Box>,
    );
    cy.get("[data-testid=prerenderable-tab-panel]").should("have.css", "position", "absolute");
    cy.get("[data-testid=prerenderable-tab-panel]").should("have.css", "minHeight", "100%");
    cy.get("[data-testid=prerenderable-tab-panel]").should("have.css", "width", "600px");
  });

  it(`renders content if it's inactive and prerender is enabled`, () => {
    mount(
      <PrerenderableTabPanel index={0} selectedIndex={1} prerender>
        tab content
      </PrerenderableTabPanel>,
    );
    cy.get("[data-testid=prerenderable-tab-panel]").should("contain", "tab content");
  });

  it(`doesn't render content if it's inactive and prerender is disabled`, () => {
    mount(
      <PrerenderableTabPanel index={0} selectedIndex={1}>
        tab content
      </PrerenderableTabPanel>,
    );
    cy.get("[data-testid=prerenderable-tab-panel]").should("not.contain", "tab content");
  });

  it(`renders content if it's active`, () => {
    mount(
      <PrerenderableTabPanel index={0} selectedIndex={0}>
        tab content
      </PrerenderableTabPanel>,
    );
    cy.get("[data-testid=prerenderable-tab-panel]").should("contain", "tab content");
  });
});

import { AppStage, Layout, LayoutType, LightningState } from "types/lightning";

import { childFor, componentPathFor, routesFor } from "./state";

describe("componentPathFor", () => {
  it("returns the full path to access a child component in the Lightning state", () => {
    const tests = [
      { path: "", expected: "" },
      { path: "root.a", expected: "flows.a" },
      { path: "root.a.b", expected: "flows.a.flows.b" },
      { path: "root.a.b.c", expected: "flows.a.flows.b.flows.c" },
    ];

    tests.forEach(test => {
      expect(componentPathFor(test.path)).to.equal(test.expected);
    });
  });
});

describe("childFor", () => {
  const appState: LightningState = {
    vars: {
      _layout: [
        {
          name: "Dashboard",
          content: "root.dashboard",
        },
        {
          name: "Download Results",
          content: "root.results.download",
        },
      ],
    },
    flows: {
      dashboard: {
        vars: {
          _layout: [
            {
              name: "Dashboard",
              type: LayoutType.streamlit,
              target: "localhost:8888",
            },
          ],
        },
        flows: {},
        calls: {},
        changes: {},
        works: {},
        storage: {
          shared_access: {},
          root: "",
          transfer_files: {},
        },
      },
      results: {
        vars: {
          _layout: [
            {
              name: "Download Results",
              content: "root.results.download",
            },
          ],
        },
        flows: {
          download: {
            vars: {
              _layout: [
                {
                  name: "Download",
                  type: LayoutType.web,
                  target: "localhost:8989",
                },
              ],
            },
            flows: {},
            calls: {},
            changes: {},
            works: {},
            storage: {
              shared_access: {},
              root: "",
              transfer_files: {},
            },
          },
        },
        calls: {},
        changes: {},
        works: {},
        storage: {
          shared_access: {},
          root: "",
          transfer_files: {},
        },
      },
    },
    calls: {},
    changes: {},
    storage: {
      shared_access: {},
      root: "",
      transfer_files: {},
    },
    works: {},
    app_state: {
      stage: AppStage.blocking,
    },
  };

  it("returns the correct state for the given child path", async () => {
    const tests = [
      { path: "", expected: undefined },
      { path: "root.dashboard", expected: appState.flows.dashboard },
      { path: "root.results.download", expected: appState.flows.results?.flows.download },
    ];

    tests.forEach(test => {
      expect(childFor(test.path, appState)).to.equal(test.expected);
    });
  });
});

describe("routesFor", () => {
  it("returns `state.vars._layout`", () => {
    cy.fixture("app-state--simple-layout.json").then((state: LightningState) => {
      expect(routesFor(state)).to.deep.equal(state.vars._layout);
    });
  });

  it("wraps `state.vars._layout` in an array if it contains only one item", () => {
    cy.fixture("app-state--simple-layout.json").then((state: LightningState) => {
      const stateWithSingleLayout = {
        ...state,
        vars: { ...state.vars, _layout: (state.vars._layout as Layout[])[0] as Layout },
      };

      expect(routesFor(stateWithSingleLayout)).to.deep.equal([stateWithSingleLayout.vars._layout]);
    });
  });
});

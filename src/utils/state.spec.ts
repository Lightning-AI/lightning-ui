import { AppStage, LayoutType, LightingState, Layout } from "types/lightning";
import { childFor, componentPathFor, routesFor } from "./state";

describe("componentPathFor", () => {
  it("returns the full path to access a child component in the Lightning state", () => {
    const tests = [
      { path: "", expected: "" },
      { path: "root.a", expected: "children.a" },
      { path: "root.a.b", expected: "children.a.children.b" },
      { path: "root.a.b.c", expected: "children.a.children.b.children.c" },
    ];

    tests.forEach(test => {
      expect(componentPathFor(test.path)).to.equal(test.expected);
    });
  });
});

describe("childFor", () => {
  const appState: LightingState = {
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
    children: {
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
        children: {},
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
        children: {
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
            children: {},
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
      { path: "root.dashboard", expected: appState.children.dashboard },
      { path: "root.results.download", expected: appState.children.results.children.download },
    ];

    tests.forEach(test => {
      expect(childFor(test.path, appState)).to.equal(test.expected);
    });
  });
});

describe("routesFor", () => {
  it("returns `state.vars._layout`", () => {
    cy.fixture("app-state--simple-layout.json").then((state: LightingState) => {
      expect(routesFor(state)).to.deep.equal(state.vars._layout);
    });
  });

  it("wraps `state.vars._layout` in an array if it contains only one item", () => {
    cy.fixture("app-state--simple-layout.json").then((state: LightingState) => {
      const stateWithSingleLayout = {
        ...state,
        vars: { ...state.vars, _layout: (state.vars._layout as Layout[])[0] },
      };

      expect(routesFor(stateWithSingleLayout)).to.deep.equal([stateWithSingleLayout.vars._layout]);
    });
  });
});

import React, { useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import useLightningState from "hooks/useLightningState";
import LayoutView from "./LayoutView";
import { layoutFor } from "utils/state";
import AdminView from "./AdminView";
import AppView from "./AppView";
import useRuntime, { Runtime } from "hooks/useRuntime";

export default function LightningAppRoutes() {
  const lightningState = useLightningState();
  const runtime = useRuntime();

  // Just use the first component as the home route
  const homeRoute = layoutFor(lightningState.data!).find(() => true);

  const homePage = useMemo(
    () =>
      homeRoute?.path !== undefined && (
        <Route
          index
          element={<Navigate replace to={`/view/${homeRoute.path}${homeRoute.path.endsWith("/") ? "" : "/"}`} />}
        />
      ),
    [homeRoute?.path],
  );

  return (
    <Routes>
      {lightningState.isLoading && <Route path="*" element={<div>Lightning is initializing...</div>} />}
      <Route path="/" element={<Navigate replace to={runtime === Runtime.local ? "/admin" : "/view"} />} />
      {runtime === Runtime.local && <Route path="/admin" element={<AdminView />}></Route>}

      <Route path="/view" element={<AppView />}>
        {homePage}
        {layoutFor(lightningState.data!).map(route => (
          <Route
            path={encodeURIComponent(route.path)}
            element={<LayoutView layout={route.layout} />}
            key={route.path}
          />
        ))}
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

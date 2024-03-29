import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import useLightningState from "hooks/useLightningState";
import { layoutFor } from "utils/state";

import AppView from "./AppView";
import LayoutView from "./LayoutView";

export default function LightningAppRoutes() {
  const lightningState = useLightningState();

  // Just use the first component as the home route
  const homeRoute = layoutFor(lightningState.data!).find(() => true);

  return (
    <Routes>
      {lightningState.isLoading && <Route path="*" element={<div>Lightning is initializing...</div>} />}
      <Route path="/" element={<Navigate replace to={"/view"} />} />
      <Route path="/view" element={<AppView />}>
        {homeRoute !== undefined && <Route index element={<Navigate replace to={`/view/${homeRoute.path}`} />} />}
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

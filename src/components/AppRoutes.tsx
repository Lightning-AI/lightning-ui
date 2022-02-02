import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import useLightingState from "hooks/useLightningState";
import LayoutView from "./LayoutView";
import { layoutFor } from "utils/state";
import AdminView from "./AdminView";
import AppView from "./AppView";
import Components from "./Components";

export default function LightningAppRoutes() {
  const lightningState = useLightingState();

  // Just use the first component as the home route
  const homeRoute = layoutFor(lightningState.data!).find(() => true);

  return (
    <Routes>
      {lightningState.isLoading && (
        <Route path="*" element={<div>Lightning is initializing...</div>} />
      )}

      {!lightningState.isLoading && homeRoute !== undefined && (
        <Route path="/" element={<Navigate replace to={`/view/${homeRoute.path}`} />} />
      )}

      <Route path="/admin" element={<AdminView />}>
        <Route index element={<Components />} />
      </Route>

      <Route path="/view" element={<AppView />}>
        {layoutFor(lightningState.data!).map(route => (
          <Route path={route.path} element={<LayoutView layout={route.layout} />} key={route.path} />
        ))}
      </Route>

      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

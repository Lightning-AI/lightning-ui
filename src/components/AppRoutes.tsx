import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useLightingState from "hooks/useLightningState";
import { LightingState } from "types/lightning";
import IFrameRoute from "./IFrameRoute";

type LightningRoute = {
  name: string;
  iframe_target_url?: string;
};

const routesFor = (lightningState?: LightingState): LightningRoute[] => {
  if (lightningState === undefined) {
    return [];
  }

  try {
    // FIXME(alecmerdler): Parse routes from the `layout` property of the app state...
    lightningState.vars._layout.forEach(layout => {
      
    })

    return [];
  } catch (e) {
    console.error(e);

    return [];
  }
}

const routeElementFor = (route: LightningRoute) => {
  if (route.iframe_target_url !== undefined && route.iframe_target_url !== "") {
    return <IFrameRoute iframeTargetUrl={route.iframe_target_url} name={route.name} />;
  }

  return <div>{route.name}</div>;
}

export default function LightningAppRoutes() {
  const lightningState = useLightingState();

  return (
    <Router>
      <Routes>
        {/* Loading */}
        {lightningState.isLoading && (
          <Route path="*" element={<div>Lightning is initializing...</div>} />
        )}

        <Route path="/" element={<div>Default view</div>}>
          {/* TODO(alecmerdler): Should every app have the same default home page...? */}
          
          {routesFor(lightningState.data).map(route => (
            <Route key={route.name} path={`/${route.name}`} element={routeElementFor(route)} />
          ))}
        </Route>       
      </Routes>
    </Router>
  );
}

import React from "react";
import { styled } from "@mui/material";

import { Layout, LayoutBranch, LayoutLeaf } from "types/lightning";
import useLightingState from "hooks/useLightningState";
import { childFor } from "utils/state";
import IFrameRoute from "./IFrameRoute";

type Props = {
  layout: Layout;
};

const LayoutContainer = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

// TODO(alecmerdler): Define styles for separating iframes...
const Separator = styled("div")({
  flexGrow: 1,
});

/**
 * Component which recursively renders a layout tree from the given
 * starting point.
 */
export default function LayoutView(props: Props) {
  const lightningState = useLightingState();

  if (lightningState.isLoading || lightningState.data === undefined) {
    return null;
  }

  // Terminating case
  if ((props.layout as LayoutLeaf).target !== undefined) {
    const iframeTargetUrl = (props.layout as LayoutLeaf).target;

    return <IFrameRoute name={props.layout.name} iframeTargetUrl={iframeTargetUrl} />;
  }

  const child = childFor((props.layout as LayoutBranch).content, lightningState.data);

  // Recursive case (multiple children)
  if (Array.isArray(child.vars._layout)) {
    return (
      <LayoutContainer>
        {child.vars._layout.map(layout => (
          <Separator key={layout.name}>
            <LayoutView layout={layout} />
          </Separator>
        ))}
      </LayoutContainer>
    )
  }

  // Recursive case (single child)
  return <LayoutView layout={child.vars._layout} />;
}

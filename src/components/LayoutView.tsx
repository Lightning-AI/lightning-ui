import React from "react";
import { Stack } from "design-system/components";

import { Layout, LayoutBranch, LayoutLeaf } from "types/lightning";
import useLightningState from "hooks/useLightningState";
import { childFor } from "utils/state";
import IFrameRoute from "./IFrameRoute";

type Props = {
  layout: Layout;
};

/**
 * Component which recursively renders a layout tree from the given
 * starting point.
 */
export default function LayoutView(props: Props) {
  const lightningState = useLightningState();

  if (lightningState.isLoading || lightningState.data === undefined) {
    return null;
  }

  // Terminating case
  if ((props.layout as LayoutLeaf).target !== undefined) {
    return <IFrameRoute name={props.layout.name} iframeTargetUrl={(props.layout as LayoutLeaf).target} />;
  }

  const child = childFor((props.layout as LayoutBranch).content, lightningState.data);
  const layout = child.vars._layout as Layout | Layout[];

  // Recursive case (multiple children)
  if (Array.isArray(layout)) {
    return (
      <Stack sx={{ width: "100%", heigth: "100%" }}>
        {layout.map(layout => (
          <Stack key={layout.name} flexGrow={1}>
            <LayoutView layout={layout} />
          </Stack>
        ))}
      </Stack>
    );
  }

  // Recursive case (single child)
  return <LayoutView layout={child.vars._layout} />;
}

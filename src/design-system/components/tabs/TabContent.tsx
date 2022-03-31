import React from "react";

function TabContent(props: any) {
  const { children } = props;
  return <>{children}</>;
}

const TabContentMemo = React.memo(props => <TabContent {...props} />);

export default TabContentMemo;

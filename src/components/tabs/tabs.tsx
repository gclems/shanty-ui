import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cn } from "tailwind-variants";

import "./tabs.css";

function Root({ className, ...props }: BaseTabs.Root.Props) {
  return <BaseTabs.Root {...props} className={cn(className, "tabs")} />;
}

function List({ className, children, ...props }: BaseTabs.List.Props) {
  return (
    <BaseTabs.List {...props} className={cn(className, "tabs-list")}>
      {children}
      <BaseTabs.Indicator className="tabs-indicator" />
    </BaseTabs.List>
  );
}

function Tab({ className, ...props }: BaseTabs.Tab.Props) {
  return <BaseTabs.Tab {...props} className={cn(className, "tabs-tab")} />;
}

function Panel({ className, ...props }: BaseTabs.Panel.Props) {
  return <BaseTabs.Panel {...props} className={cn(className, "tabs-panel")} />;
}

const Tabs = Object.assign(Root, { Root, List, Tab, Panel });

export { Tabs };

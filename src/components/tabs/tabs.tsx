import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import "./tabs.css";

function Root(props: BaseTabs.Root.Props) {
  return <BaseTabs.Root data-slot="tabs" {...props} />;
}

function List({ children, ...props }: BaseTabs.List.Props) {
  return (
    <BaseTabs.List data-slot="tabs-list" {...props}>
      {children}
      <BaseTabs.Indicator data-slot="tabs-indicator" />
    </BaseTabs.List>
  );
}

function Tab(props: BaseTabs.Tab.Props) {
  return <BaseTabs.Tab data-slot="tabs-tab" {...props} />;
}

function Panel(props: BaseTabs.Panel.Props) {
  return <BaseTabs.Panel data-slot="tabs-panel" {...props} />;
}

const Tabs = Object.assign(Root, { Root, List, Tab, Panel });

export { Tabs };

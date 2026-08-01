import { createFileRoute } from "@tanstack/react-router";

import { Tabs } from "../../src/components/tabs/tabs";

export const Route = createFileRoute("/tabs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-4">
      <h3>Horizontal</h3>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2 (long)</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
        <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
      </Tabs>

      <h3>Vertical</h3>
      <Tabs orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2 (long)</Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
        <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
      </Tabs>

      <h3>Vertical with custom list width</h3>
      <Tabs orientation="vertical">
        <Tabs.List className="w-36">
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab value="tab2">Tab 2 </Tabs.Tab>
          <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Content for Tab 1</Tabs.Panel>
        <Tabs.Panel value="tab2">Content for Tab 2</Tabs.Panel>
        <Tabs.Panel value="tab3">Content for Tab 3</Tabs.Panel>
      </Tabs>
    </div>
  );
}

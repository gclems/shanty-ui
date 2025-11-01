import { createFileRoute } from "@tanstack/react-router";

import { Menu } from "@/index";

export const Route = createFileRoute("/menu")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Menu>
      <Menu.Trigger>Open Menu</Menu.Trigger>
      <Menu.Popup>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Item 3</Menu.Item>
      </Menu.Popup>
    </Menu>
  );
}

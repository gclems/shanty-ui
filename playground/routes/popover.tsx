import { createFileRoute } from "@tanstack/react-router";

import { Popover } from "@/index";

export const Route = createFileRoute("/popover")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Popover>
      <Popover.Trigger>Open popover</Popover.Trigger>
      <Popover.Popup>This is the popover content.</Popover.Popup>
    </Popover>
  );
}

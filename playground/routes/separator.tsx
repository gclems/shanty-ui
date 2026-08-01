import { createFileRoute } from "@tanstack/react-router";

import { Separator } from "@/index";

export const Route = createFileRoute("/separator")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-4">
      <div className="flex h-40 w-full items-center justify-center border p-4">
        <Separator orientation="horizontal" />
      </div>
      <div className="flex h-40 w-full items-center justify-center border p-4">
        <Separator orientation="vertical" />
      </div>
    </div>
  );
}

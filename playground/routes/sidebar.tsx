import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sidebar")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/sidebar"!</div>;
}

import { createFileRoute } from "@tanstack/react-router";

import { Avatar } from "@/index";

export const Route = createFileRoute("/avatar")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar.Root>
        <Avatar.Image
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
        />
        <Avatar.Fallback className="bg-primary text-primary-foreground">
          LT
        </Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="bg-primary text-primary-foreground">
        LT
      </Avatar.Root>
    </div>
  );
}

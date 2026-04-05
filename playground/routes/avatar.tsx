import { createFileRoute } from "@tanstack/react-router";

import { Avatar, type AvatarProps } from "@/index";

export const Route = createFileRoute("/avatar")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-4">
      <Example size="sm" />
      <Example size="default" />
      <Example size="lg" />
    </div>
  );
}

function Example({ size }: { size: AvatarProps["size"] }) {
  return (
    <>
      <h2>Size: {size}</h2>
      <div className="gap-4 flex items-center">
        <Avatar
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          fallback="lt"
          size={size}
          tooltip="Lilian Thuram"
        />
        <Avatar
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          size={size}
          tooltip="Lilian Thuram"
        />
        <Avatar fallback="lt" size={size} tooltip="Lilian Thuram" />
        <Avatar
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          fallback="lt"
          badge
          badgeColor="success"
          size={size}
          tooltip="Lilian Thuram"
        />
      </div>
      <Avatar.Group
        avatars={[
          {
            src: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80",
            fallback: "lt",
            tooltip: "Lilian Thuram",
          },
          {
            src: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80",
            tooltip: "Lilian Thuram",
          },
          {
            fallback: "lt",
            tooltip: "Lilian Thuram",
          },
          {
            src: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80",
            fallback: "lt",
            tooltip: "Lilian Thuram",
          },
        ]}
        show={3}
        size={size}
        badgeColor="success"
      />
    </>
  );
}

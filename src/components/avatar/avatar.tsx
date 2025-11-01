import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "tailwind-variants";

import "./avatar.css";

function Root({ className, ...props }: BaseAvatar.Root.Props) {
  return <BaseAvatar.Root className={cn(className, "avatar")} {...props} />;
}

function Image({ className, ...props }: BaseAvatar.Image.Props) {
  return (
    <BaseAvatar.Image
      {...props}
      width="48"
      height="48"
      className={cn(className, "avatar-image")}
    />
  );
}

function Fallback({ className, ...props }: BaseAvatar.Fallback.Props) {
  return (
    <BaseAvatar.Fallback
      {...props}
      className={cn(className, "avatar-fallback")}
    />
  );
}

const Avatar = Object.assign(Root, { Root, Image, Fallback });

export { Avatar };

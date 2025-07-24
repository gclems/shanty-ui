import type { ComponentProps } from "react";

import { AvatarPrimitive } from "./primitives";

const SimpleAvatar = ({
  className,
  src,
  fallback,
}: {
  className?: string;
  src?: ComponentProps<typeof AvatarPrimitive.Image>["src"];
  fallback?: ComponentProps<typeof AvatarPrimitive.Fallback>["children"];
}) => {
  return (
    <AvatarPrimitive.Root className={className}>
      {src && <AvatarPrimitive.Image src={src} />}
      <AvatarPrimitive.Fallback>{fallback}</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export { SimpleAvatar };

import type { ComponentProps } from "react";

import { Avatar } from "@base-ui-components/react";

import { cn } from "@/lib/tools/cn";

const AvatarPrimitiveRoot = ({
  className,
  ...props
}: ComponentProps<typeof Avatar.Root>) => {
  return (
    <Avatar.Root
      className={cn(
        "flex size-12 items-center justify-center overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
};

export { AvatarPrimitiveRoot };

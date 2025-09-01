import { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

import { ContextMenuPrimitive } from "../primitives";

function SimpleContextMenuSeparator({
  className,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      className={cn(
        "bg-context-menu-item-foreground mx-4 my-1.5 h-px",
        className,
      )}
      {...props}
    />
  );
}

export { SimpleContextMenuSeparator };

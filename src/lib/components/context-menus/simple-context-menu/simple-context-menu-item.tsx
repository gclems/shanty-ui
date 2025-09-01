import { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

import { ContextMenuPrimitive } from "../primitives";

function SimpleContextMenuItem({
  className,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Item>) {
  return (
    <ContextMenuPrimitive.Item
      className={cn(
        "bg-context-menu-item-background text-context-menu-item-foreground",
        "data-[highlighted]:text-context-menu-item-hover-foreground data-[highlighted]:before:text-context-menu-item-hover-foreground",
        "data-[highlighted]:bg-context-menu-item-hover-background data-[highlighted]:before:bg-context-menu-item-hover-background",
        "[&_svg]:mr-1 [&_svg]:size-4",
        "flex cursor-default select-none py-2 pl-4 pr-8 text-sm leading-4 outline-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm",
        className,
      )}
      {...props}
    />
  );
}

export { SimpleContextMenuItem };

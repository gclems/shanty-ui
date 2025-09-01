import { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

import { ContextMenuPrimitive } from "../primitives";

function SimpleContextMenuPopup({
  className,
  ...props
}: ComponentProps<typeof ContextMenuPrimitive.Popup>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner className="outline-none">
        <ContextMenuPrimitive.Popup
          className={cn(
            "text-context-menu-item-foreground bg-context-menu-background origin-[var(--transform-origin)] py-1 shadow-lg outline-none transition-[opacity] data-[ending-style]:opacity-0",
            className,
          )}
          {...props}
        />
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
}

export { SimpleContextMenuPopup };

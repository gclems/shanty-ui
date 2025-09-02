import { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

import { MenuPrimitive } from "../primitives";

function SimpleMenuPopup({
  className,
  ...props
}: ComponentProps<typeof MenuPrimitive.Popup>) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner className="outline-none" sideOffset={8}>
        <MenuPrimitive.Popup
          className={cn(
            "text-context-menu-item-foreground bg-context-menu-background origin-[var(--transform-origin)] py-1 shadow-lg outline-none transition-[opacity] data-[ending-style]:opacity-0",
            className,
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export { SimpleMenuPopup };

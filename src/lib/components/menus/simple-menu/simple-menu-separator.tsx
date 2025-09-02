import { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

import { MenuPrimitive } from "../primitives";

function SimpleMenuSeparator({
  className,
  ...props
}: ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator
      className={cn(
        "bg-context-menu-item-foreground mx-4 my-1.5 h-px",
        className,
      )}
      {...props}
    />
  );
}

export { SimpleMenuSeparator };

import * as React from "react";

import { cn } from "@/lib/tools/cn";

import { ToggleGroupPrimitive } from "./toggle-group-primitive";

function SimpleToggleGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive>) {
  return (
    <ToggleGroupPrimitive
      {...props}
      className={cn(
        "flex gap-px rounded-md border border-gray-200 bg-gray-50 p-0.5",
        className,
      )}
    />
  );
}

export { SimpleToggleGroup };

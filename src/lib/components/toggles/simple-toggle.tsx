import { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

import { TogglePrimitive } from "./toggle-primitive";

function SimpleToggle({
  className,
  ...props
}: ComponentProps<typeof TogglePrimitive>) {
  return (
    <div className="flex gap-px rounded-md border border-gray-200 bg-gray-50 p-0.5">
      <TogglePrimitive
        className={cn(
          "flex size-8 select-none items-center justify-center rounded-sm text-gray-600 hover:bg-gray-100 focus-visible:bg-none focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200 data-[pressed]:text-gray-900",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { SimpleToggle };

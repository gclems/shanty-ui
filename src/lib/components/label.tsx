import type { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

const Label = ({
  className,
  required = false,
  children,
  ...props
}: ComponentProps<"label"> & {
  required?: boolean;
}) => (
  <label
    className={cn(
      "text-label-foreground flex select-none items-center gap-2 text-sm font-medium leading-none",
      "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
    {required && <span className="text-label-required">*</span>}
  </label>
);

export { Label };

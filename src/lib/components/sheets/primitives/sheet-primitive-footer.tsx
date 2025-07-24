import type { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

const SheetPrimitiveFooter = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
);

export { SheetPrimitiveFooter };

import { cn } from "@/lib/tools/cn";
import type { ComponentProps } from "react";

const DialogPrimitiveFooter = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
);

export { DialogPrimitiveFooter };

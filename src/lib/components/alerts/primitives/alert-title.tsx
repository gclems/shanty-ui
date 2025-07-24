import type { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

const AlertPrimitiveTitle = ({
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
};

export { AlertPrimitiveTitle };

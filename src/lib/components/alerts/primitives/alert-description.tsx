import type { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

const AlertPrimitiveDescription = ({
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
};

export { AlertPrimitiveDescription };

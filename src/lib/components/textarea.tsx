import type { ComponentProps } from "react";

import { cn } from "@/lib/tools/cn";

const Textarea = ({ className, ...props }: ComponentProps<"textarea">) => {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-sm border px-3.5 text-base",
        "bg-input-background border-input-border text-input-foreground placeholder:text-input-placeholder",
        "focus:outline-3 focus:outline-input-ring/50 focus:-outline-offset-1",
        className,
      )}
      {...props}
    />
  );
};

export { Textarea };

import type { ComponentProps } from "react";

import { Input as InputPrimitive } from "@base-ui-components/react/input";

import { cn } from "@/lib/tools/cn";

const Input = ({
  className,
  ...props
}: ComponentProps<typeof InputPrimitive>) => {
  return (
    <InputPrimitive
      className={cn(
        "h-10 w-full rounded-sm border px-3.5 text-base",
        "bg-input-background border-input-border text-input-foreground placeholder:text-input-placeholder",
        "focus:outline-3 focus:outline-input-ring/50 focus:-outline-offset-1",
        className,
      )}
      {...props}
    />
  );
};

export { Input };

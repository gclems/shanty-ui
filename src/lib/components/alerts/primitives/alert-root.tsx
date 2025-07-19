import { cn } from "@/lib/tools/cn";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const alert = tv({
  base: cn(
    "relative grid w-full rounded-sm border px-6 py-2",
    "items-start gap-y-0.5",
    "grid-cols-[0_1fr] has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  ),
  variants: {
    color: {
      info: "bg-alert-info-background text-alert-info-foreground border-alert-info-border",
      warning:
        "bg-alert-warning-background text-alert-warning-foreground border-alert-warning-border",
      error:
        "bg-alert-error-background text-alert-error-foreground border-alert-error-border",
    },
  },
  defaultVariants: {
    color: "info",
  },
});

const AlertPrimitiveRoot = ({
  color,
  className,
  ...props
}: ComponentProps<"div"> & {
  color?: "info" | "warning" | "error";
}) => {
  return (
    <div
      role="alert"
      className={alert({ color, class: className })}
      {...props}
    />
  );
};

export { AlertPrimitiveRoot };

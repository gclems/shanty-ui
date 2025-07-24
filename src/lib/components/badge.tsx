import type { ComponentProps } from "react";

import { tv } from "tailwind-variants";

import { cn } from "@/lib/tools/cn";

const badge = tv({
  base: cn(
    "inline-flex shrink-0 cursor-default items-center justify-center overflow-hidden rounded-sm",
    "w-fit whitespace-nowrap border px-2 py-0.5 text-xs",
    "gap-1 [&>svg]:pointer-events-none [&>svg]:size-3",
    "focus-visible:border-ring focus-visible:ring-ring/50 transition-[color,box-shadow] focus-visible:ring-[3px]",
  ),
  variants: {
    color: {
      primary:
        "bg-badge-primary-background text-badge-primary-foreground border-badge-primary-border",
      secondary:
        "bg-badge-secondary-background text-badge-secondary-foreground border-badge-secondary-border",
      neutral:
        "bg-badge-neutral-background text-badge-neutral-foreground border-badge-neutral-border",
      info: "bg-badge-info-background text-badge-info-foreground border-badge-info-border",
      success:
        "bg-badge-success-background text-badge-success-foreground border-badge-success-border",
      warning:
        "bg-badge-warning-background text-badge-warning-foreground border-badge-warning-border",
      error:
        "bg-badge-error-background text-badge-error-foreground border-badge-error-border",
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});

const Badge = ({
  color,
  className,
  ...props
}: ComponentProps<"span"> & {
  color?:
    | "primary"
    | "secondary"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";
}) => {
  return <span className={badge({ color, class: className })} {...props} />;
};

export { Badge };

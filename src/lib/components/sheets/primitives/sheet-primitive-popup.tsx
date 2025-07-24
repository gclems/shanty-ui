import { cn } from "@/lib/tools/cn";
import { Dialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const popup = tv({
  base: cn(
    "fixed inset-y-0",
    "bg-dialog-background text-dialog-foreground",
    "border-dialog-border",
    "space-y-6 p-6",
    "transition-all duration-150",
    "data-[ending-style]:-right-[100%] data-[starting-style]:-right-[100%]",
  ),
  variants: {
    size: {
      sm: "w-full md:w-96",
      md: "w-full md:w-[600px]",
      lg: "w-full md:w-[800px]",
      full: "w-full",
    },
    side: {
      left: "left-0 border-r",
      right: "right-0 border-l",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const SheetPrimitivePopup = ({
  size,
  side = "right",
  className,
  ...props
}: ComponentProps<typeof Dialog.Popup> & {
  size?: "sm" | "md" | "lg" | "full";
  side?: "left" | "right";
}) => {
  return (
    <Dialog.Popup
      className={popup({ size, side, class: className as string })}
      {...props}
    />
  );
};

export { SheetPrimitivePopup };

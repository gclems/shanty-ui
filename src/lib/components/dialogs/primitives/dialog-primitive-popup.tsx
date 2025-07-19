import { cn } from "@/lib/tools/cn";
import { Dialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const popup = tv({
  base: cn(
    "fixed left-1/2 top-1/2 -mt-8 max-w-[calc(100vw-3rem)]",
    "bg-dialog-background text-dialog-foreground",
    "space-y-6 rounded-sm p-6",
    "-translate-x-1/2 -translate-y-1/2 transition-all duration-150",
    "data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
  ),
  variants: {
    size: {
      sm: "w-full md:w-96",
      md: "w-full md:w-[600px]",
      lg: "w-full md:w-[800px]",
      full: "w-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const DialogPrimitivePopup = ({
  size,
  className,
  ...props
}: ComponentProps<typeof Dialog.Popup> & {
  size?: "sm" | "md" | "lg" | "full";
}) => {
  return (
    <Dialog.Popup
      className={popup({ size, class: className as string })}
      {...props}
    />
  );
};

export { DialogPrimitivePopup };

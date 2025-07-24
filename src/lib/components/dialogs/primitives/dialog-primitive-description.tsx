import type { ComponentProps } from "react";

import { Dialog } from "@base-ui-components/react";

import { cn } from "@/lib/tools/cn";

const DialogPrimitiveDescription = ({
  className,
  ...props
}: ComponentProps<typeof Dialog.Description>) => {
  return (
    <Dialog.Description
      className={cn("text-dialog-description-foreground text-base", className)}
      {...props}
    />
  );
};

export { DialogPrimitiveDescription };

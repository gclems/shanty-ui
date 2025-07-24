import type { ComponentProps } from "react";

import { Dialog } from "@base-ui-components/react";

import { cn } from "@/lib/tools/cn";

const SheetPrimitiveTitle = ({
  className,
  ...props
}: ComponentProps<typeof Dialog.Title>) => (
  <Dialog.Title
    className={cn("-mt-1.5 mb-1 text-lg font-medium", className)}
    {...props}
  />
);

export { SheetPrimitiveTitle };

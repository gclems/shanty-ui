import type { ComponentProps, ReactNode } from "react";

import { XIcon } from "lucide-react";

import { Button } from "@/lib/components/button";
import { cn } from "@/lib/tools/cn";

import { DialogPrimitive } from "../primitives";

const SimpleDialogHeader = ({
  title,
  description,
  className,
  ...props
}: ComponentProps<"div"> & {
  title: ReactNode;
  description?: ReactNode;
}) => (
  <div className={cn("relative", className)} {...props}>
    <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
    <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
    <DialogPrimitive.Close className="absolute right-0 top-1.5">
      <Button variant="link" className="text-dialog-foreground" square>
        <XIcon />
      </Button>
    </DialogPrimitive.Close>
  </div>
);

export { SimpleDialogHeader };

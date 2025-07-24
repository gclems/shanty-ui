import type { ComponentProps, ReactNode } from "react";

import { XIcon } from "lucide-react";

import { Button } from "@/lib/components/button";
import { cn } from "@/lib/tools/cn";

import { SheetPrimitive } from "../primitives";

const SimpleSheetHeader = ({
  title,
  description,
  className,
  ...props
}: ComponentProps<"div"> & {
  title: ReactNode;
  description?: ReactNode;
}) => (
  <div className={cn("relative", className)} {...props}>
    <SheetPrimitive.Title>{title}</SheetPrimitive.Title>
    <SheetPrimitive.Description>{description}</SheetPrimitive.Description>
    <SheetPrimitive.Close className="absolute right-0 top-1.5">
      <Button variant="link" className="text-dialog-foreground" square>
        <XIcon />
      </Button>
    </SheetPrimitive.Close>
  </div>
);

export { SimpleSheetHeader };

import { Button } from "@/components/button";
import { SheetPrimitive } from "../primitives";
import { XIcon } from "lucide-react";
import { cn } from "@/tools/cn";
import type { ComponentProps, ReactNode } from "react";

const SimpleSheetHeader = ({ title, description, className, ...props }: ComponentProps<'div'> & {
    title: ReactNode;
    description?: ReactNode;
}) => <div className={cn("relative", className)} {...props}>
    <SheetPrimitive.Title>{title}</SheetPrimitive.Title>
    <SheetPrimitive.Description>{description}</SheetPrimitive.Description>
    <SheetPrimitive.Close className="absolute top-1.5 right-0">
        <Button variant="link" className="text-dialog-foreground" square>
            <XIcon />
        </Button>
    </SheetPrimitive.Close>
</div>;

export { SimpleSheetHeader };
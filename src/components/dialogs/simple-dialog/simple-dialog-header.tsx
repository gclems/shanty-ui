import { Button } from "@/components/button";
import { DialogPrimitive } from "../primitives";
import { XIcon } from "lucide-react";
import { cn } from "@/tools/cn";
import type { ComponentProps, ReactNode } from "react";

const SimpleDialogHeader = ({ title, description, className, ...props }: ComponentProps<'div'> & {
    title: ReactNode;
    description?: ReactNode;
}) => <div className={cn("relative", className)} {...props}>
    <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
    <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
    <DialogPrimitive.Close className="absolute top-1.5 right-0">
        <Button variant="link" className="text-dialog-foreground" square>
            <XIcon />
        </Button>
    </DialogPrimitive.Close>
</div>;

export { SimpleDialogHeader };
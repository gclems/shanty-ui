import { cn } from "@/tools/cn";
import { Dialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const DialogPrimitiveDescription = ({ className, ...props }: ComponentProps<typeof Dialog.Description>) => {
    return (
        <Dialog.Description
            className={cn("text-base text-dialog-description-foreground", className)}
            {...props}
        />
    );
}

export { DialogPrimitiveDescription };
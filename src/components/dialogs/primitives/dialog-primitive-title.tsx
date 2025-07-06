import { cn } from "@/tools/cn";
import { Dialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const DialogPrimitiveTitle = ({ className, ...props }: ComponentProps<typeof Dialog.Title>) =>
    <Dialog.Title className={cn("-mt-1.5 mb-1 text-lg font-medium", className)} {...props} />

export { DialogPrimitiveTitle };
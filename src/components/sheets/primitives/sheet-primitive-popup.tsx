import { cn } from "@/tools/cn";
import { Dialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const popup = tv({
    base: cn(
        "fixed inset-y-0 right-0",
        "bg-dialog-background text-dialog-foreground",
        "p-6 space-y-6",
        "transition-all duration-150",
        "data-[ending-style]:-right-[100%] data-[starting-style]:-right-[100%]",
    ),
    variants: {
        size: {
            sm: 'w-full md:w-96',
            md: 'w-full md:w-[600px]',
            lg: 'w-full md:w-[800px]',
            full: 'w-full',
        }
    },
    defaultVariants: {
        size: 'md',
    },
});

const SheetPrimitivePopup = ({ size, className, ...props }: ComponentProps<typeof Dialog.Popup> & {
    size?: 'sm' | 'md' | 'lg' | 'full';
}) => {
    return <Dialog.Popup
        className={popup({ size, class: className as string })}
        {...props} />
}

export { SheetPrimitivePopup };
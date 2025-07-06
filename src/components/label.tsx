import { cn } from "@/tools/cn";
import type { ComponentProps } from "react";

const Label = ({ className,required = false, children, ...props }: ComponentProps<'label'> & {
    required?: boolean;
}) =>
    <label
        className={cn(
            'flex items-center gap-2 text-sm leading-none font-medium select-none text-label-foreground',
            'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            className)}
        {...props}
    >
        {children}
        {required && <span className="text-label-required">*</span>}
    </label>;

export { Label };
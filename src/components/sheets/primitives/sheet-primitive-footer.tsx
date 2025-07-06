import { cn } from "@/tools/cn";
import type { ComponentProps } from "react";

const SheetPrimitiveFooter = ({className, ...props}: ComponentProps<'div'>) => <div className={cn('flex items-center justify-between', className)} {...props} />

export { SheetPrimitiveFooter };
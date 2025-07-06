import { cn } from "@/tools/cn";
import { Accordion } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const AccordionPrimitiveHeader = ({ className, ...props }: ComponentProps<typeof Accordion.Header>) => (
    <Accordion.Header
        className={cn('flex items-center justify-between', className)}
        {...props} />
);

export { AccordionPrimitiveHeader };
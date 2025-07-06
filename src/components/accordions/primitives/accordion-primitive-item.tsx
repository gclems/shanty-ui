import { cn } from "@/tools/cn";
import { Accordion } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const AccordionPrimitiveItem = ({ className, ...props }: ComponentProps<typeof Accordion.Item>) => (
    <Accordion.Item className={cn('border-b border-accordion-item-border', className)} {...props} />
);

export { AccordionPrimitiveItem };
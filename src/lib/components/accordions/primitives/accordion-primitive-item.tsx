import { cn } from "@/lib/tools/cn";
import { Accordion } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const AccordionPrimitiveItem = ({
  className,
  ...props
}: ComponentProps<typeof Accordion.Item>) => (
  <Accordion.Item
    className={cn("border-accordion-item-border border-b", className)}
    {...props}
  />
);

export { AccordionPrimitiveItem };

import { cn } from "@/lib/tools/cn";
import { Accordion } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const AccordionPrimitivePanel = ({
  className,
  ...props
}: ComponentProps<typeof Accordion.Panel>) => (
  <Accordion.Panel
    className={cn(
      "bg-accordion-panel-background text-accordion-panel-foreground",
      "transition-[height] duration-150 ease-out",
      "data-[ending-style]:h-0 data-[starting-style]:h-0",
      "p-3",
      className,
    )}
    {...props}
  />
);

export { AccordionPrimitivePanel };

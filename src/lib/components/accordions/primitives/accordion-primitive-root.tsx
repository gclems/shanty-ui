import { cn } from "@/lib/tools/cn";
import { Accordion } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const AccordionPrimitiveRoot = ({
  className,
  ...props
}: ComponentProps<typeof Accordion.Root>) => (
  <Accordion.Root
    className={cn("flex flex-col justify-center", className)}
    {...props}
  />
);

export { AccordionPrimitiveRoot };

import type { ComponentProps } from "react";

import { Accordion } from "@base-ui-components/react";

import { cn } from "@/lib/tools/cn";

const AccordionPrimitiveHeader = ({
  className,
  ...props
}: ComponentProps<typeof Accordion.Header>) => (
  <Accordion.Header
    className={cn("flex items-center justify-between", className)}
    {...props}
  />
);

export { AccordionPrimitiveHeader };

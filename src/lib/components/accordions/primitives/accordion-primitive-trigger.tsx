import { cn } from "@/lib/tools/cn";
import { Accordion } from "@base-ui-components/react";
import { PlusIcon } from "lucide-react";
import type { ComponentProps } from "react";

const AccordionPrimitiveTrigger = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Accordion.Trigger>) => (
  <Accordion.Trigger
    className={cn(
      "group relative flex w-full items-baseline justify-between gap-4",
      "py-2 pl-3 pr-1",
      "focus-visible:z-1 focus-visible:ring-3 focus-visible:ring-accordion-trigger-ring/50 outline-none",
      "bg-accordion-trigger-background text-accordion-trigger-foreground",
      "hover:bg-accordion-trigger-hover-background hover:text-accordion-trigger-hover-foreground",
      className,
    )}
    {...props}
  >
    {children}
    <PlusIcon
      className={cn(
        "mr-2 size-3 shrink-0",
        "transition-all ease-out",
        "group-data-[panel-open]:rotate-45 group-data-[panel-open]:scale-110",
      )}
    />
  </Accordion.Trigger>
);

export { AccordionPrimitiveTrigger };

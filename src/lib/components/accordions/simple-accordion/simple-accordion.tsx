import type { ComponentProps } from "react";
import { AccordionPrimitive } from "../primitives";

const SimpleAccordion = (props: ComponentProps<typeof AccordionPrimitive.Root>) => <AccordionPrimitive.Root {...props} />

export { SimpleAccordion };
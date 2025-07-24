import { AccordionPrimitive } from "../primitives";

const SimpleAccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <AccordionPrimitive.Item>
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger>{title}</AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Panel>{children}</AccordionPrimitive.Panel>
  </AccordionPrimitive.Item>
);

export { SimpleAccordionItem };

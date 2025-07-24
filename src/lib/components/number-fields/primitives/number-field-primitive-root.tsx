import type { ComponentProps } from "react";

import { NumberField } from "@base-ui-components/react";

import { Field } from "@/lib/components/field";
import { cn } from "@/lib/tools/cn";

const NumberFieldPrimitiveRoot = ({
  className,
  ...props
}: ComponentProps<typeof NumberField.Root>) => (
  <Field
    render={<NumberField.Root className={cn("", className)} {...props} />}
  />
);

export { NumberFieldPrimitiveRoot };

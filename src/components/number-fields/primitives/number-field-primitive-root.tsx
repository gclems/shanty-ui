import { Field } from "@/components/field";
import { cn } from "@/tools/cn";
import { NumberField } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const NumberFieldPrimitiveRoot = ({ className, ...props }: ComponentProps<typeof NumberField.Root>) =>
    <Field render={
        <NumberField.Root
            className={cn('', className)}
            {...props} />}
    />;

export { NumberFieldPrimitiveRoot };
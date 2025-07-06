import { cn } from "@/tools/cn";
import { mergeProps, useRender } from "@base-ui-components/react";


interface FieldProps extends useRender.ComponentProps<'div'> { }

const Field = ({ render = <div />, className, ...props }: FieldProps) => useRender({
    render,
    props: mergeProps<'div'>({
        className: cn('space-y-1', className)
    },
        props)
});



export { Field };
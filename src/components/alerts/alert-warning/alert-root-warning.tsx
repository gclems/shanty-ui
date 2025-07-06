import { TriangleAlert } from "lucide-react";
import { AlertPrimitive } from "../primitives";
import type { ComponentProps } from "react";

const AlertRootWarning = ({
    children,
    ...props
}: Omit<ComponentProps<typeof AlertPrimitive.Root>, 'color'>) => {
    return <AlertPrimitive.Root color="warning" {...props}>
        <TriangleAlert />
        {children}
    </AlertPrimitive.Root>;
}

export { AlertRootWarning };
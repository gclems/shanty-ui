import { InfoIcon } from "lucide-react";
import { AlertPrimitive } from "../primitives";
import type { ComponentProps} from "react";

const AlertRootInfo = ({
    children,
    ...props
}: Omit<ComponentProps<typeof AlertPrimitive.Root>, 'color'>) => {
    return <AlertPrimitive.Root color="info" {...props}>
        <InfoIcon />
        {children}
    </AlertPrimitive.Root>;
}

export { AlertRootInfo };
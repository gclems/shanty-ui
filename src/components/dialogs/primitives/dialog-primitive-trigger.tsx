import { childrenAsRender } from "@/tools/children-as-render";
import { Dialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const DialogPrimitiveTrigger = ({ children, ...props }: Omit<ComponentProps<typeof Dialog.Trigger>, "render">) => (
    <Dialog.Trigger
        {...props}
        render={childrenAsRender(children)}
    />);

export { DialogPrimitiveTrigger };
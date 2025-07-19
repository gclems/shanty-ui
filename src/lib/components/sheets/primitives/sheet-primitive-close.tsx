import { childrenAsRender } from "@/lib/tools/children-as-render";
import { Dialog } from "@base-ui-components/react";
import type { ComponentProps } from "react";

const SheetPrimitiveClose = ({
  children,
  ...props
}: Omit<ComponentProps<typeof Dialog.Close>, "render">) => (
  <Dialog.Close {...props} render={childrenAsRender(children)} />
);

export { SheetPrimitiveClose };

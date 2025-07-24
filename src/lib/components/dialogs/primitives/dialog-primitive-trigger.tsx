import type { ComponentProps } from "react";

import { Dialog } from "@base-ui-components/react";

import { childrenAsRender } from "@/lib/tools/children-as-render";

const DialogPrimitiveTrigger = ({
  children,
  ...props
}: Omit<ComponentProps<typeof Dialog.Trigger>, "render">) => (
  <Dialog.Trigger {...props} render={childrenAsRender(children)} />
);

export { DialogPrimitiveTrigger };

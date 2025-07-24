import type { ComponentProps } from "react";

import { Dialog } from "@base-ui-components/react/dialog";

const DialogPrimitiveRoot = ({
  modal = true,
  ...props
}: ComponentProps<typeof Dialog.Root>) => (
  <Dialog.Root {...props} modal={modal} />
);

export { DialogPrimitiveRoot };

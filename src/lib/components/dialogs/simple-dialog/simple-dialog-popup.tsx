import type { ComponentProps } from "react";

import { DialogPrimitive } from "../primitives";

const SimpleDialogPopup = ({
  ...props
}: ComponentProps<typeof DialogPrimitive.Popup>) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Backdrop />
    <DialogPrimitive.Popup {...props} />
  </DialogPrimitive.Portal>
);

export { SimpleDialogPopup };

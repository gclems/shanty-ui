import type { ComponentProps } from "react";

import { SheetPrimitive } from "../primitives";

const SimpleSheetPopup = ({
  ...props
}: ComponentProps<typeof SheetPrimitive.Popup>) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Backdrop />
    <SheetPrimitive.Popup {...props} />
  </SheetPrimitive.Portal>
);

export { SimpleSheetPopup };

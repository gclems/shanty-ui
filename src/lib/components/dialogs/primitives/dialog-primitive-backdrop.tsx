import { Dialog } from "@base-ui-components/react";

const DialogPrimitiveBackdrop = () => (
  <Dialog.Backdrop className="bg-dialog-backdrop fixed inset-0 opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
);

export { DialogPrimitiveBackdrop };

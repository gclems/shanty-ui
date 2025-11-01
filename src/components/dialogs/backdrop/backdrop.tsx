import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { cn } from "tailwind-variants";

import "./backdrop.css";

function Backdrop({
  className,
  ...props
}: Omit<BaseDialog.Backdrop.Props, "className"> & { className?: string }) {
  return (
    <BaseDialog.Backdrop
      className={cn("dialog-backdrop", className)}
      {...props}
    />
  );
}

export { Backdrop };

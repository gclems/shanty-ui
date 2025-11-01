import { Toast as BaseToast } from "@base-ui/react/toast";
import { XIcon } from "lucide-react";
import { cn } from "tailwind-variants";

import "./toast.css";

function Root({ toast, className, ...props }: BaseToast.Root.Props) {
  return (
    <BaseToast.Root
      key={toast.id}
      toast={toast}
      {...props}
      className={cn(className, "toast")}
    >
      <BaseToast.Content className="toast-content">
        <BaseToast.Title className="toast-title" />
        <BaseToast.Description className="toast-description" />
        <BaseToast.Close className="toast-close" aria-label="Close">
          <XIcon className="h-4 w-4" />
        </BaseToast.Close>
      </BaseToast.Content>
    </BaseToast.Root>
  );
}

const Toast = Object.assign(Root, {
  Root,
  useToastManager: BaseToast.useToastManager,
});

export { Toast };

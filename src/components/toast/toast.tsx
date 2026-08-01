import { Toast as BaseToast } from "@base-ui/react/toast";
import { XIcon } from "lucide-react";
import "./toast.css";

function Root({ toast, ...props }: BaseToast.Root.Props) {
  return (
    <BaseToast.Root key={toast.id} toast={toast} data-slot="toast" {...props}>
      <BaseToast.Content data-slot="toast-content">
        <BaseToast.Title data-slot="toast-title" />
        <BaseToast.Description data-slot="toast-description" />
        <BaseToast.Close data-slot="toast-close" aria-label="Close">
          <XIcon />
        </BaseToast.Close>
      </BaseToast.Content>
    </BaseToast.Root>
  );
}

function Provider({ children, ...props }: BaseToast.Provider.Props) {
  return (
    <BaseToast.Provider {...props}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport data-slot="toast-viewport">
          <List />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}

function List() {
  const { toasts } = BaseToast.useToastManager();
  return (
    <>
      {toasts.map((toast) => (
        <Toast toast={toast} key={toast.id} />
      ))}
    </>
  );
}

const Toast = Object.assign(Root, {
  Root,
  Provider,
  List,
  useToastManager: BaseToast.useToastManager,
});

export { Toast };

import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "tailwind-variants";

import { Toast } from "./toast/toast";

import "./shanty-root.css";

function ShantyRoot({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  toast?: boolean;
  tooltip?: boolean;
}) {
  const compose = (child: React.ReactNode) => {
    let content = child;
    // if (props.tooltip) content = <TooltipProvider>{content}</TooltipProvider>;
    if (props.toast) content = <ToastProvider>{content}</ToastProvider>;
    return content;
  };

  return (
    <div {...props} className={cn(className, "sui-root")}>
      {compose(children)}
    </div>
  );
}

function ToastProvider({ children, ...props }: BaseToast.Provider.Props) {
  return (
    <BaseToast.Provider {...props}>
      {children}
      <BaseToast.Portal>
        <BaseToast.Viewport className="toast-viewport">
          <ToastList />
        </BaseToast.Viewport>
      </BaseToast.Portal>
    </BaseToast.Provider>
  );
}

function ToastList() {
  const { toasts } = BaseToast.useToastManager();
  return (
    <>
      {toasts.map((toast) => (
        <Toast toast={toast} key={toast.id} />
      ))}
    </>
  );
}

export { ShantyRoot };

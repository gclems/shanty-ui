import { XIcon } from "lucide-react";

import { cn } from "@/lib/tools/cn";

import { ToastPrimitive } from "../primitives";

export interface ToastObject<Data extends object> {
  id: string;
  ref?: React.RefObject<HTMLElement | null>;
  title?: string;
  type?: string;
  description?: string;
  timeout?: number;
  priority?: "low" | "high";
  transitionStatus?: "starting" | "ending" | undefined;
  limited?: boolean;
  height?: number;
  onClose?: () => void;
  onRemove?: () => void;
  actionProps?: React.ComponentPropsWithoutRef<"button">;
  data?: Data;
}

const SimpleToast = ({ toast }: { toast: ToastObject<object> }) => (
  <ToastPrimitive.Root
    toast={toast}
    className={cn(
      "border-toast-border bg-toast-background text-toast-foreground",
      "absolute bottom-0 left-auto right-0 z-[calc(1000-var(--toast-index))] mr-0 w-full select-none rounded-lg border bg-clip-padding p-4 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(min(var(--toast-index),10)*-15px)))_scale(calc(max(0,1-(var(--toast-index)*0.1))))] [transition-property:opacity,transform] after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[limited]:opacity-0 data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))] data-[starting-style]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]",
    )}
    style={{
      ["--gap" as string]: "1rem",
      ["--offset-y" as string]:
        "calc(var(--toast-offset-y) * -1 + (var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y))",
    }}
  >
    <ToastPrimitive.Title className="text-[0.975rem] font-medium leading-5" />
    <ToastPrimitive.Description className="text-[0.925rem] leading-5 text-gray-700" />
    <ToastPrimitive.Close
      className={cn(
        "absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded border-none",
        "text-toast-foreground hover:text-toast-foreground/70 active:text-toast-foreground/50 bg-transparent",
      )}
      aria-label="Close"
    >
      <XIcon className="h-4 w-4" />
    </ToastPrimitive.Close>
  </ToastPrimitive.Root>
);

export { SimpleToast };

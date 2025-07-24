import type { ComponentProps } from "react";

import { SidebarPrimitive } from "./sidebar/primitives";
import { SimpleToastProvider } from "./toasts/simple-toast/simple-toast-provider";
import { TooltipPrimitive } from "./tooltips/primitives";

const Providers = ({
  tooltip,
  children,
}: {
  tooltip?: ComponentProps<typeof TooltipPrimitive.Provider>;
  sidebar?: ComponentProps<typeof SidebarPrimitive.Provider>;
  children: React.ReactNode;
}) => {
  return (
    <TooltipPrimitive.Provider {...tooltip}>
      <SimpleToastProvider>
        <SidebarPrimitive.Provider>{children}</SidebarPrimitive.Provider>
      </SimpleToastProvider>
    </TooltipPrimitive.Provider>
  );
};

export { Providers };

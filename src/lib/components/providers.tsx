import type { ComponentProps } from "react";
import { TooltipPrimitive } from "./tooltips/primitives";
import { SidebarPrimitive } from "./sidebar/primitives";

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
      <SidebarPrimitive.Provider>{children}</SidebarPrimitive.Provider>
    </TooltipPrimitive.Provider>
  );
};

export { Providers };

import { TooltipPrimitive } from "@/lib/components/tooltips/primitives";
import { cn } from "@/lib/tools/cn";
import { mergeProps, useRender } from "@base-ui-components/react";
import { Button } from "../../button";

interface SidebarPrimitiveMenuButtonProps
  extends useRender.ComponentProps<typeof Button> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipPrimitive.Popup>;
}

function SidebarPrimitiveMenuButton({
  isActive = false,
  //   tooltip,
  className,
  render = <Button />,
  ...props
}: SidebarPrimitiveMenuButtonProps) {
  //   const { isMobile, state } = useSidebar();

  const otherProps = {
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-active": isActive,
    ...props,
  };

  return useRender({
    render,
    props: mergeProps<typeof Button>(
      {
        className: cn(
          "peer/menu-button outline-hidden ring-sidebar-ring group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! flex w-full items-center gap-2 overflow-hidden rounded-sm p-2 text-left text-sm transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "bg-sidebar-item-background text-sidebar-item-foreground",
          "hover:bg-sidebar-item-hover-background hover:text-sidebar-item-hover-foreground",
          "active:bg-sidebar-item-active-background active:text-sidebar-item-active-foreground",
          "data-[active=true]:bg-sidebar-item-selected-background data-[active=true]:text-sidebar-item-selected-foreground",
          "h-8 text-sm",
          className,
        ),
      },
      otherProps,
    ),
  });

  //   if (!tooltip) {
  //    return button;
  //   }

  //   if (typeof tooltip === "string") {
  //     tooltip = {
  //       children: tooltip,
  //     };
  //   }

  //   return button;

  //   return (
  //     <TooltipPrimitive.Root>
  //       <TooltipPrimitive.Trigger>{button}</TooltipPrimitive.Trigger>
  //       <TooltipPrimitive.Popup
  //         side="right"
  //         align="center"
  //         hidden={state !== "collapsed" || isMobile}
  //         {...tooltip}
  //       />
  //     </TooltipPrimitive.Root>
  //   );
}

export { SidebarPrimitiveMenuButton };

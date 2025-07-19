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
          "peer/menu-button outline-hidden ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground group-has-data-[sidebar=menu-action]/menu-item:pr-8 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! flex w-full items-center gap-2 overflow-hidden rounded-sm p-2 text-left text-sm transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
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

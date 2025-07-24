import { mergeProps, useRender } from "@base-ui-components/react";

import { useSidebar } from "@/lib/hooks/use-sidebar";
import { cn } from "@/lib/tools/cn";

import { SimpleTooltip } from "../../tooltips/simple-tooltip";

interface SidebarPrimitiveMenuButtonProps
  extends useRender.ComponentProps<"button"> {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: React.ComponentProps<typeof SimpleTooltip>["content"];
}

function SidebarPrimitiveMenuButton({
  isActive = false,
  tooltip,
  className,
  render = <button />,
  ...props
}: SidebarPrimitiveMenuButtonProps) {
  const { isMobile, state } = useSidebar();

  const otherProps = {
    "data-slot": "sidebar-menu-button",
    "data-sidebar": "menu-button",
    "data-active": isActive,
    ...props,
  };

  const button = useRender({
    render,
    props: mergeProps<"button">(
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

  if (!tooltip) {
    return button;
  }

  return (
    <SimpleTooltip
      content={tooltip}
      side="right"
      hidden={state !== "collapsed" || isMobile}
    >
      {button}
    </SimpleTooltip>
  );
}

export { SidebarPrimitiveMenuButton };

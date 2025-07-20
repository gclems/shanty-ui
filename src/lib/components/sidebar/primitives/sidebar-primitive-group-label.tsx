import { cn } from "@/lib/tools/cn";
import { mergeProps, useRender } from "@base-ui-components/react";

function SidebarPrimitiveGroupLabel({
  className,
  render = <div />,
  ...props
}: useRender.ComponentProps<"div">) {
  const otherProps = {
    ...props,
    "data-slot": "sidebar-group-label",
    "data-sidebar": "group-label",
  };

  return useRender({
    render,
    props: mergeProps<"div">(
      {
        className: cn(
          "text-sidebar-foreground/70 ring-sidebar-ring outline-hidden flex h-8 shrink-0 items-center rounded-sm px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        ),
      },
      otherProps,
    ),
  });
}

export { SidebarPrimitiveGroupLabel };

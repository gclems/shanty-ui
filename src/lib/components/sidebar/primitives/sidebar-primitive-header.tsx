import { cn } from "@/lib/tools/cn";

function SidebarPrimitiveHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col p-2", className)}
      {...props}
    />
  );
}

export { SidebarPrimitiveHeader };

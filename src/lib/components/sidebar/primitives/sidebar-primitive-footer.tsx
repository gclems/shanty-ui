import { cn } from "@/lib/tools/cn";

function SidebarPrimitiveFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

export { SidebarPrimitiveFooter };

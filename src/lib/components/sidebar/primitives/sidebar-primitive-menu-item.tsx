import { cn } from "@/lib/tools/cn";

function SidebarPrimitiveMenuItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

export { SidebarPrimitiveMenuItem };

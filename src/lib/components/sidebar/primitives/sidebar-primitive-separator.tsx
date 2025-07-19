import { Separator } from "@/lib/components/separator";
import { cn } from "@/lib/tools/cn";

function SidebarPrimitiveSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border", className)}
      {...props}
    />
  );
}

export { SidebarPrimitiveSeparator };

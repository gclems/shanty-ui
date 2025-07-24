import { MenuIcon } from "lucide-react";

import { Button } from "@/lib/components/button";
import { useSidebar } from "@/lib/hooks/use-sidebar";
import { cn } from "@/lib/tools/cn";

function SidebarPrimitiveTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <MenuIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

export { SidebarPrimitiveTrigger };

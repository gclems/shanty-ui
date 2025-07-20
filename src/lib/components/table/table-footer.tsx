import { cn } from "@/lib/tools/cn";

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-table-footer-background text-table-footer-foreground border-table-border border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

export { TableFooter };

import { cn } from "@/lib/tools/cn";

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-table-header-background text-table-header-foreground border-table-border [&_tr]:border-b",
        className,
      )}
      {...props}
    />
  );
}

export { TableHeader };

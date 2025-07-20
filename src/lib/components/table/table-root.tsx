import { cn } from "@/lib/tools/cn";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn(
          "bg-table-background text-table-foreground border-table-border w-full caption-bottom border text-sm",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Table };

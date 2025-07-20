import { cn } from "@/lib/tools/cn";

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-table-row-hover-background hover:text-table-row-hover-foreground",
        "data-[state=selected]:bg-table-row-hover-background data-[state=selected]:text-table-row-hover-foreground",
        "border-table-border border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

export { TableRow };

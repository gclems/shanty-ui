import { cn } from "@/lib/tools/cn";

function TableCell({
  className,
  fit = false,
  ...props
}: React.ComponentProps<"td"> & {
  fit?: boolean;
}) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
        {
          "w-0 whitespace-nowrap": fit,
        },
      )}
      {...props}
    />
  );
}

export { TableCell };

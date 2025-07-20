import { cn } from "@/lib/tools/cn";

function TableHead({
  className,
  fit = false,
  ...props
}: React.ComponentProps<"th"> & {
  fit?: boolean;
}) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 whitespace-nowrap px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
        {
          "w-0 whitespace-nowrap": fit,
        },
      )}
      {...props}
    />
  );
}

export { TableHead };

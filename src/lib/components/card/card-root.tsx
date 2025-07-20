import { cn } from "@/lib/tools/cn";

function CardRoot({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card-background text-card-foreground border-card-border flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export { CardRoot };

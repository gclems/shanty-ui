import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { cn } from "tailwind-variants";

import "./scroll-area.css";

function Scrollbar({ className, ...props }: BaseScrollArea.Scrollbar.Props) {
  return (
    <BaseScrollArea.Scrollbar
      className={cn("scroll-bar", className)}
      {...props}
    >
      <BaseScrollArea.Thumb className="scroll-bar-thumb" />
    </BaseScrollArea.Scrollbar>
  );
}

function ScrollArea({
  vertical = false,
  horizontal = false,
  children,
  className,
  ...props
}: BaseScrollArea.Root.Props & {
  vertical?: boolean;
  horizontal?: boolean;
}) {
  return (
    <BaseScrollArea.Root {...props} className={cn("scroll-area", className)}>
      <BaseScrollArea.Viewport className="scroll-area-viewport">
        <BaseScrollArea.Content
          className={cn("scroll-area-content")}
          data-vertical={vertical || undefined}
          data-horizontal={horizontal || undefined}
        >
          {children}
        </BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      {vertical && <Scrollbar orientation="vertical" />}
      {horizontal && <Scrollbar orientation="horizontal" />}
      {vertical && horizontal && (
        <BaseScrollArea.Corner className="scroll-area-corner" />
      )}
    </BaseScrollArea.Root>
  );
}

export { ScrollArea };

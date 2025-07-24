import { ComponentProps } from "react";

import { Radio } from "@base-ui-components/react/radio";

import { cn } from "@/lib/tools/cn";

function RadioTabRadio({
  children,
  className,
  ...props
}: ComponentProps<typeof Radio.Root> & {
  children?: React.ReactNode;
}) {
  return (
    <div className="group/radio">
      <Radio.Root
        className={cn(
          "border px-2 py-0.5",
          "group-first/radio:rounded-l-sm",
          "group-last/radio:rounded-r-sm",
          "flex items-center justify-center",
          "[&_svg]:size-3.5",
          "bg-checkbox-background border-checkbox-border",
          "hover:bg-checkbox-hover-background",
          "focus:outline-3 focus:outline-checkbox-background/50",
          "data-[checked]:bg-checkbox-checked-background data-[checked]:border-checkbox-checked-background data-[checked]:text-checkbox-checked-foreground",
          className,
        )}
        {...props}
      >
        <label>{children}</label>
      </Radio.Root>
    </div>
  );
}

export { RadioTabRadio };

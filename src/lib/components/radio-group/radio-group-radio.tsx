import { ComponentProps } from "react";

import { Radio } from "@base-ui-components/react/radio";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/tools/cn";

function RadioGroupRadio({
  children,
  className,
  ...props
}: ComponentProps<typeof Radio.Root> & {
  children?: React.ReactNode;
}) {
  return (
    <label className="flex w-fit items-center gap-x-1">
      <Radio.Root
        className={cn(
          "size-4 rounded-full border",
          "flex items-center justify-center",
          "[&_svg]:size-3.5",
          "bg-checkbox-background border-checkbox-border",
          "hover:bg-checkbox-hover-background",
          "focus:outline-3 focus:outline-checkbox-background/50",
          "data-[checked]:bg-checkbox-checked-background data-[checked]:text-checkbox-checked-foreground data-[checked]:border-checkbox-checked-border",
          className,
        )}
        {...props}
      >
        <Radio.Indicator>
          <CheckIcon />
        </Radio.Indicator>
      </Radio.Root>
      {children}
    </label>
  );
}

export { RadioGroupRadio };

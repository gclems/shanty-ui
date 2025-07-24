import { ComponentProps } from "react";

import { Checkbox as CheckboxBase } from "@base-ui-components/react/checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "../tools/cn";

function Checkbox({
  className,
  children,
  ...props
}: ComponentProps<typeof CheckboxBase.Root> & {
  children?: React.ReactNode;
}) {
  return (
    <label className="flex w-fit items-center gap-x-1">
      <CheckboxBase.Root
        className={cn(
          "size-4 rounded-sm border",
          "flex items-center justify-center",
          "[&_svg]:size-3.5",
          "bg-checkbox-background border-checkbox-border",
          "hover:bg-checkbox-hover-background",
          "data-[checked]:bg-checkbox-checked-background data-[checked]:text-checkbox-checked-foreground data-[checked]:border-checkbox-checked-border",
          "focus:outline-3 focus:outline-checkbox-background/50",
          className,
        )}
        {...props}
      >
        <CheckboxBase.Indicator>
          <CheckIcon />
        </CheckboxBase.Indicator>
      </CheckboxBase.Root>
      {children}
    </label>
  );
}

export { Checkbox };

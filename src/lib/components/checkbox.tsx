import { CheckIcon } from "lucide-react";

import { Checkbox as CheckboxBase } from "@base-ui-components/react/checkbox";
import { ComponentProps } from "react";
import { cn } from "../tools/cn";

function Checkbox({
  className,
  children,
  ...props
}: ComponentProps<typeof CheckboxBase.Root> & {
  children?: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-x-1">
      <CheckboxBase.Root
        className={cn(
          "size-5 rounded-sm border",
          "flex items-center justify-center",
          "[&_svg]:size-4",
          "bg-checkbox-background border-checkbox-border",
          "hover:bg-checkbox-hover-background",
          "data-[checked]:bg-checkbox-checked-background data-[checked]:text-checkbox-checked-foreground data-[checked]:border-checkbox-checked-border",
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

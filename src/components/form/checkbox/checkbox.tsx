import type * as React from "react";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from "tailwind-variants";

import "./checkbox.css";

function Checkbox({
  label,
  className,
  ...rootProps
}: BaseCheckbox.Root.Props & {
  label?: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label
      data-slot="checkbox-label"
      className={cn(className, "group/checkbox")}
    >
      <BaseCheckbox.Root data-slot="checkbox" {...rootProps}>
        <BaseCheckbox.Indicator data-slot="checkbox-indicator">
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label}
    </label>
  );
}

export { Checkbox };

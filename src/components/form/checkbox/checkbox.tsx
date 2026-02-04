import * as React from "react";

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
    <label className={cn(className, "group/checkbox checkbox-label")}>
      <BaseCheckbox.Root {...rootProps} className="checkbox">
        <BaseCheckbox.Indicator className="checkbox-indicator">
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {label}
    </label>
  );
}

export { Checkbox };

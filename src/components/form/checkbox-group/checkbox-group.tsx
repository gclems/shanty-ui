import * as React from "react";

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import { cn } from "tailwind-variants";

import "./checkbox-group.css";

export default function CheckboxGroup({
  className,
  ...props
}: BaseCheckboxGroup.Props) {
  const id = React.useId();

  return (
    <BaseCheckboxGroup
      aria-labelledby={id}
      className={cn(className, "checkbox-group")}
      {...props}
    />
  );
}

export { CheckboxGroup };

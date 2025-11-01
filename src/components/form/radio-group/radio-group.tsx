import { useId } from "react";

import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { cn } from "tailwind-variants";

import "./radio-group.css";

function RadioGroup({ className, ...props }: BaseRadioGroup.Props) {
  const id = useId();

  return (
    <BaseRadioGroup
      aria-labelledby={id}
      className={cn(className, "radio-group")}
      {...props}
    />
  );
}

export { RadioGroup };

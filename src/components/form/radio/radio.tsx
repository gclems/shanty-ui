import { Radio as BaseRadio } from "@base-ui/react/radio";
import { cn } from "tailwind-variants";

import "./radio.css";

function Radio({
  label,
  className,
  ...props
}: BaseRadio.Root.Props & {
  label?: string;
  className?: string;
}) {
  return (
    <label
      data-slot="radio-label"
      className={cn(className, "group/radio")}
    >
      <BaseRadio.Root data-slot="radio" {...props}>
        <BaseRadio.Indicator data-slot="radio-indicator" />
      </BaseRadio.Root>
      {label}
    </label>
  );
}

export { Radio };

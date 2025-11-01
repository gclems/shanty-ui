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
    <label className={cn(className, "group/radio radio-label")}>
      <BaseRadio.Root className="radio" {...props}>
        <BaseRadio.Indicator className="radio-indicator" />
      </BaseRadio.Root>
      {label}
    </label>
  );
}

export { Radio };

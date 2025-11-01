import { Separator as BaseSeparator } from "@base-ui/react/separator";
import { cn } from "tailwind-variants";

import "./separator.css";

function Separator({ className, ...props }: BaseSeparator.Props) {
  return <BaseSeparator {...props} className={cn(className, "separator")} />;
}

export { Separator };

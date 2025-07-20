import { RadioGroup } from "@base-ui-components/react/radio-group";
import { ComponentProps } from "react";

function RadioGroupRoot({ ...props }: ComponentProps<typeof RadioGroup>) {
  return <RadioGroup {...props} />;
}

export { RadioGroupRoot };

import { ComponentProps } from "react";

import { RadioGroup } from "@base-ui-components/react/radio-group";

function RadioGroupRoot({ ...props }: ComponentProps<typeof RadioGroup>) {
  return <RadioGroup {...props} />;
}

export { RadioGroupRoot };

import { ComponentProps } from "react";

import { RadioGroup } from "@base-ui-components/react/radio-group";

function RadioTabRoot({ ...props }: ComponentProps<typeof RadioGroup>) {
  return (
    <RadioGroup
      className="bg-checkbox-background border-checkbox-border flex w-fit items-center"
      {...props}
    />
  );
}

export { RadioTabRoot };

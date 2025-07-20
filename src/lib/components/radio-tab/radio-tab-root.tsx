import { RadioGroup } from "@base-ui-components/react/radio-group";
import { ComponentProps } from "react";

function RadioTabRoot({ ...props }: ComponentProps<typeof RadioGroup>) {
  return (
    <RadioGroup
      className="bg-checkbox-background border-checkbox-border flex w-fit items-center"
      {...props}
    />
  );
}

export { RadioTabRoot };

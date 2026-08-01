import { useId } from "react";

import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import "./radio-group.css";

function RadioGroup(props: BaseRadioGroup.Props) {
  const id = useId();

  return (
    <BaseRadioGroup
      aria-labelledby={id}
      data-slot="radio-group"
      {...props}
    />
  );
}

export { RadioGroup };

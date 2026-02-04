import * as React from "react";

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import "./checkbox-group.css";

export default function CheckboxGroup({
  ...props
}: BaseCheckboxGroup.Props) {
  const id = React.useId();

  return (
    <BaseCheckboxGroup
      aria-labelledby={id}
      data-slot="checkbox-group"
      {...props}
    />
  );
}

export { CheckboxGroup };

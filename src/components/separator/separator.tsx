import { Separator as BaseSeparator } from "@base-ui/react/separator";

import "./separator.css";

function Separator(props: BaseSeparator.Props) {
  return <BaseSeparator data-slot="separator" {...props} />;
}

export { Separator };

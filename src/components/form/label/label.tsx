import { mergeProps, useRender } from "@base-ui/react";
import "./label.css";

interface LabelProps extends useRender.ComponentProps<"label"> {
  required?: boolean;
}

function Label({
  render,
  required = false,
  children,
  ...props
}: LabelProps) {
  const element = useRender({
    defaultTagName: "label",
    render,
    props: mergeProps<"label">(
      {
        "data-slot": "label",
        children: (
          <>
            {children}
            <span data-slot="label-required">{required && " *"}</span>
          </>
        ),
      },
      props,
    ),
  });

  return element;
}

export { Label };

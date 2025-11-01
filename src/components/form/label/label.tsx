import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "tailwind-variants";

import "./label.css";

interface LabelProps extends useRender.ComponentProps<"label"> {
  required?: boolean;
}

function Label({
  render,
  className,
  required = false,
  children,
  ...props
}: LabelProps) {
  const element = useRender({
    defaultTagName: "label",
    render,
    props: mergeProps<"label">(
      {
        className: cn(className, "label"),
        children: (
          <>
            {children}
            <span className="label-required">{required && " *"}</span>
          </>
        ),
      },
      props,
    ),
  });

  return element;
}

export { Label };

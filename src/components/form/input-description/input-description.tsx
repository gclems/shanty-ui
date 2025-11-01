import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "tailwind-variants";

import "./input-description.css";

interface InputDescriptionProps extends useRender.ComponentProps<"p"> {
  required?: boolean;
}

function InputDescription({
  render,
  className,
  ...props
}: InputDescriptionProps) {
  const element = useRender({
    defaultTagName: "p",
    render,
    props: mergeProps<"p">(
      {
        className: cn(className, "input-description"),
      },
      props,
    ),
  });

  return element;
}

export { InputDescription };

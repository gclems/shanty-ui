import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "tailwind-variants";

import "./input-error.css";

interface InputErrorProps extends useRender.ComponentProps<"p"> {
  required?: boolean;
}

function InputError({ render, className, ...props }: InputErrorProps) {
  const element = useRender({
    defaultTagName: "p",
    render,
    props: mergeProps<"p">(
      {
        className: cn(className, "input-error"),
      },
      props,
    ),
  });

  return element;
}

export { InputError };

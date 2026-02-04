import { mergeProps, useRender } from "@base-ui/react";
import "./input-error.css";

interface InputErrorProps extends useRender.ComponentProps<"p"> {
  required?: boolean;
}

function InputError({ render, ...props }: InputErrorProps) {
  const element = useRender({
    defaultTagName: "p",
    render,
    props: mergeProps<"p">(
      {
        "data-slot": "input-error",
      },
      props,
    ),
  });

  return element;
}

export { InputError };

import { Input as BaseInput, mergeProps, useRender } from "@base-ui/react";
import { cn } from "tailwind-variants";

import "./input.css";

function Input({
  render = <BaseInput />,
  className,
  ...props
}: useRender.ComponentProps<typeof BaseInput>) {
  const element = useRender({
    render,
    props: mergeProps<typeof BaseInput>(
      {
        className: cn(className, "input"),
      },
      props,
    ),
  });

  return element;
}

export { Input };

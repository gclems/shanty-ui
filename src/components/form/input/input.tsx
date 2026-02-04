import { Input as BaseInput, mergeProps, useRender } from "@base-ui/react";
import "./input.css";

function Input({
  render = <BaseInput />,
  ...props
}: useRender.ComponentProps<typeof BaseInput>) {
  const element = useRender({
    render,
    props: mergeProps<typeof BaseInput>(
      {
        "data-slot": "input",
      },
      props,
    ),
  });

  return element;
}

export { Input };

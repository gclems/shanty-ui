import { mergeProps, useRender } from "@base-ui-components/react";

import { cn } from "@/lib/tools/cn";

const Field = ({
  render = <div />,
  className,
  ...props
}: useRender.ComponentProps<"div">) =>
  useRender({
    render,
    props: mergeProps<"div">(
      {
        className: cn("space-y-1", className),
      },
      props,
    ),
  });

export { Field };

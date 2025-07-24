import type { ComponentProps } from "react";

import { OctagonAlert } from "lucide-react";

import { AlertPrimitive } from "../primitives";

const AlertRootError = ({
  children,
  ...props
}: Omit<ComponentProps<typeof AlertPrimitive.Root>, "color">) => {
  return (
    <AlertPrimitive.Root color="error" {...props}>
      <OctagonAlert />
      {children}
    </AlertPrimitive.Root>
  );
};

export { AlertRootError };

import { isValidElement } from "react";

const childrenAsRender = (
  children: React.ReactNode,
):
  | React.ReactElement<
      Record<string, unknown>,
      string | React.JSXElementConstructor<unknown>
    >
  | undefined =>
  typeof children === "function"
    ? children
    : children && isValidElement(children)
      ? // Clone and cast to ensure props type matches Record<string, unknown>

        (children as React.ReactElement<Record<string, unknown>>)
      : undefined;

export { childrenAsRender };

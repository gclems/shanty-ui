import { isValidElement } from "react";

const childrenAsRender = (children: React.ReactNode): React.ReactElement<Record<string, unknown>, string | React.JSXElementConstructor<any>> | undefined =>
    typeof children === "function"
        ? children
        : (children && isValidElement(children)
            ? (
                // Clone and cast to ensure props type matches Record<string, unknown>
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (children as React.ReactElement<Record<string, unknown>>)
            )
            : undefined)

export { childrenAsRender };
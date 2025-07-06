import type { ComponentProps } from "react"
import { TooltipPrimitive } from "./tooltips/primitives"

const Providers = ({tooltip, children}: {
    tooltip?: ComponentProps<typeof TooltipPrimitive.Provider>,
    children: React.ReactNode
}) => {
    return <TooltipPrimitive.Provider {...tooltip}>{children}</TooltipPrimitive.Provider>
}

export { Providers }
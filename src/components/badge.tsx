import { cn } from "@/tools/cn"
import type { ComponentProps } from "react"
import { tv } from "tailwind-variants"

const badge = tv({
    base: cn('cursor-default inline-flex items-center justify-center shrink-0 rounded-sm overflow-hidden',
        'border px-2 py-0.5 text-xs w-fit whitespace-nowrap',
        '[&>svg]:size-3 gap-1 [&>svg]:pointer-events-none',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow]'
    ),
    variants: {
        color: {
            primary: 'bg-badge-primary-background text-badge-primary-foreground border-badge-primary-border',
            secondary: 'bg-badge-secondary-background text-badge-secondary-foreground border-badge-secondary-border',
            neutral: 'bg-badge-neutral-background text-badge-neutral-foreground border-badge-neutral-border',
            info: 'bg-badge-info-background text-badge-info-foreground border-badge-info-border',
            success: 'bg-badge-success-background text-badge-success-foreground border-badge-success-border',
            warning: 'bg-badge-warning-background text-badge-warning-foreground border-badge-warning-border',
            error: 'bg-badge-error-background text-badge-error-foreground border-badge-error-border',
        }
    },
    defaultVariants: {
        color: 'neutral',
    }
})

const Badge = ({ color, className, ...props }: ComponentProps<'span'> & {
    color?: 'primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'warning' | 'error'
}) => {
    return <span className={badge({ color, class: className })} {...props} />
}

export { Badge }
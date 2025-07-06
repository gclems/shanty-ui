import { useRender } from '@base-ui-components/react/use-render';
import { mergeProps } from '@base-ui-components/react/merge-props';
import { tv } from "tailwind-variants"

const button = tv({
    base: "cursor-pointer outline-none focus-visible:ring-3 rounded-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
    variants: {
        variant: {
            primary: "bg-button-primary-background text-button-primary-foreground border border-button-primary-border hover:bg-button-primary-hover-background hover:text-button-primary-hover-foreground hover:border-button-primary-hover-border active:bg-button-primary-active-background active:text-button-primary-active-foreground active:border-button-primary-active-border focus-visible:ring-button-primary-ring/50",
            secondary: "bg-button-secondary-background text-button-secondary-foreground border border-button-secondary-border hover:bg-button-secondary-hover-background hover:text-button-secondary-hover-foreground hover:border-button-secondary-hover-border active:bg-button-secondary-active-background active:text-button-secondary-active-foreground active:border-button-secondary-active-border focus-visible:ring-button-secondary-ring/50",
            ghost: "bg-button-ghost-background text-button-ghost-foreground border border-button-ghost-border hover:bg-button-ghost-hover-background hover:text-button-ghost-hover-foreground hover:border-button-ghost-hover-border active:bg-button-ghost-active-background active:text-button-ghost-active-foreground active:border-button-ghost-active-border focus-visible:ring-button-ghost-ring/50",
            link: "bg-transparent text-button-link-foreground hover:text-button-link-hover-foreground active:text-button-link-active-foreground focus-visible:ring-button-link-ring/50",
            destructive: "bg-button-destructive-background text-button-destructive-foreground border border-button-destructive-border hover:bg-button-destructive-hover-background hover:text-button-destructive-hover-foreground hover:border-button-destructive-hover-border active:bg-button-destructive-active-background active:text-button-destructive-active-foreground active:border-button-destructive-active-border focus-visible:ring-button-destructive-ring/50",
        },
        square: {
            true: '',
            false: ''
        }
    },
    compoundVariants: [
        {
            variant: ['primary', 'secondary', 'ghost', "destructive"],
            class: 'px-4 py-1 flex items-center justify-center'
        },
        {
            variant: ['primary', 'secondary', 'ghost', "destructive"],
            square: true,
            class: 'size-9'
        },
        {
            variant: ['primary', 'secondary', 'ghost', "destructive"],
            square: false,
            class: 'h-9 w-fit'
        },
        {
            variant: 'link',
            class: 'inline-flex items-baseline'
        },
        {
            variant: 'link',
            square: true,
            class: 'w-9 w-fit',
        },
        {
            variant: 'link',
            square: false,
            class: 'w-fit',
        }
    ],
    defaultVariants: {
        variant: 'primary',
        square: false
    }
});

interface ButtonProps extends useRender.ComponentProps<'button'> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'link' | "destructive";
    square?: boolean;
}

const Button = ({ render = <button />, role="button", variant, square, className, ...props }: ButtonProps) => {
    const element = useRender({
        render,
        props: mergeProps<'button'>({
            className: button({ variant, square, class: className })
        },
            { role },
            props
        )
    })

    return element;
}

export { Button }
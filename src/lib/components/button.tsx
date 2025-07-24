import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { tv } from "tailwind-variants";

const button = tv({
  base: "focus-visible:ring-3 shrink-0 cursor-pointer rounded-sm outline-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      primary:
        "bg-button-primary-background text-button-primary-foreground border-button-primary-border hover:bg-button-primary-hover-background hover:text-button-primary-hover-foreground hover:border-button-primary-hover-border active:bg-button-primary-active-background active:text-button-primary-active-foreground active:border-button-primary-active-border focus-visible:ring-button-primary-ring/50 border",
      secondary:
        "bg-button-secondary-background text-button-secondary-foreground border-button-secondary-border hover:bg-button-secondary-hover-background hover:text-button-secondary-hover-foreground hover:border-button-secondary-hover-border active:bg-button-secondary-active-background active:text-button-secondary-active-foreground active:border-button-secondary-active-border focus-visible:ring-button-secondary-ring/50 border",
      ghost:
        "bg-button-ghost-background text-button-ghost-foreground border-button-ghost-border hover:bg-button-ghost-hover-background hover:text-button-ghost-hover-foreground hover:border-button-ghost-hover-border active:bg-button-ghost-active-background active:text-button-ghost-active-foreground active:border-button-ghost-active-border focus-visible:ring-button-ghost-ring/50 border",
      link: "text-button-link-foreground hover:text-button-link-hover-foreground active:text-button-link-active-foreground focus-visible:ring-button-link-ring/50 bg-transparent",
      destructive:
        "bg-button-destructive-background text-button-destructive-foreground border-button-destructive-border hover:bg-button-destructive-hover-background hover:text-button-destructive-hover-foreground hover:border-button-destructive-hover-border active:bg-button-destructive-active-background active:text-button-destructive-active-foreground active:border-button-destructive-active-border focus-visible:ring-button-destructive-ring/50 border",
    },
    square: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary", "ghost", "destructive"],
      class: "flex items-center justify-center px-4 py-1",
    },
    {
      variant: ["primary", "secondary", "ghost", "destructive"],
      square: true,
      class: "size-9",
    },
    {
      variant: ["primary", "secondary", "ghost", "destructive"],
      square: false,
      class: "h-9 w-fit",
    },
    {
      variant: "link",
      class: "inline-flex items-baseline",
    },
    {
      variant: "link",
      square: true,
      class: "w-9 w-fit",
    },
    {
      variant: "link",
      square: false,
      class: "w-fit",
    },
  ],
  defaultVariants: {
    variant: "primary",
    square: false,
  },
});

interface ButtonProps extends useRender.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "link" | "destructive";
  square?: boolean;
}

const Button = ({
  render = <button />,
  role = "button",
  variant,
  square,
  className,
  ...props
}: ButtonProps) => {
  return useRender({
    render,
    props: mergeProps<"button">(
      {
        className: button({ variant, square, class: className }),
      },
      { role },
      props,
    ),
  });
};

export { Button };

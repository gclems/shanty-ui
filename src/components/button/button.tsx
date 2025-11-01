import { ComponentProps } from "react";

import { Button as BaseButton } from "@base-ui/react/button";
import { cn } from "tailwind-variants";

import "./button.css";

function Button({
  className,
  variant = "contained",
  color = "neutral",
  square = false,
  size = "md",
  type = "button",
  render = undefined,
  ...props
}: BaseButton.Props & {
  variant?: "contained" | "outlined" | "light" | "ghost";
  color?:
    | "primary"
    | "secondary"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "destructive"
    | string;
  square?: boolean;
  size?: "sm" | "md";
  type?: ComponentProps<"button">["type"];
}) {
  return (
    <BaseButton
      {...props}
      render={render ?? <button type={type} />}
      className={cn("button", className)}
      data-variant={variant}
      data-color={color}
      data-size={size}
      data-square={square || undefined}
    />
  );
}

export { Button };

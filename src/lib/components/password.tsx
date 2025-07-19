import { cn } from "@/lib/tools/cn";
import { Input as InputPrimitive } from "@base-ui-components/react/input";
import { useState, type ComponentProps } from "react";
import { Button } from "./button";
import { EyeClosed, EyeIcon } from "lucide-react";

const Password = ({
  className,
  spellCheck = false,
  autoComplete = "current-password",
  autoCapitalize = "off",
  ignore1Password = "true",
  ignoreLP = "true",
  ignoreProtonPass = "true",
  ignoreBitwarden = "true",
  ...props
}: Omit<ComponentProps<typeof InputPrimitive>, "type"> & {
  ignore1Password?: string;
  ignoreLP?: string;
  ignoreProtonPass?: string;
  ignoreBitwarden?: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      <InputPrimitive
        type={showPassword ? "text" : "password"}
        className={cn(
          "h-10 w-full rounded-sm border pl-3.5 pr-9 text-base",
          "bg-input-background border-input-border text-input-foreground placeholder:text-input-placeholder",
          "focus:outline-3 focus:outline-input-ring/50 focus:-outline-offset-1",
        )}
        spellCheck={spellCheck}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        data-1p-ignore={ignore1Password}
        data-lpignore={ignoreLP}
        data-protonpass-ignore={ignoreProtonPass}
        data-bwignore={ignoreBitwarden}
        {...props}
      />
      <Button
        variant="link"
        className="absolute right-3 top-3 text-current hover:text-current"
        square
        onClick={() => setShowPassword(!showPassword)}
        type="button"
      >
        {showPassword ? <EyeIcon /> : <EyeClosed />}
      </Button>
    </div>
  );
};

export { Password };

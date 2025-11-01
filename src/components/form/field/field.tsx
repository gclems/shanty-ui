import { Field as BaseField } from "@base-ui/react";
import { cn } from "tailwind-variants";

import { InputDescription } from "../../form/input-description/input-description";
import { InputError } from "../../form/input-error/input-error";
import { Label } from "../../form/label/label";

import "./field.css";

function Field({
  rootProps,
  label,
  required,
  error,
  description,
  children,
}: {
  rootProps?: BaseField.Root.Props;
  label?: React.ReactNode;
  required?: boolean;
  error?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <BaseField.Root
      {...rootProps}
      className={cn("field-root", rootProps?.className)}
    >
      <Label render={<BaseField.Label />} required={required}>
        {label}
      </Label>

      {!!description && (
        <InputDescription render={<BaseField.Description />}>
          {description}
        </InputDescription>
      )}

      {children}

      {!!error && (
        <InputError render={<BaseField.Error match />}>{error}</InputError>
      )}
    </BaseField.Root>
  );
}

export { Field };

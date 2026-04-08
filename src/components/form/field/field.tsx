import { Field as BaseField } from "@base-ui/react";

import { InputDescription } from "../../form/input-description/input-description";
import { InputError } from "../../form/input-error/input-error";
import { Label } from "../../form/label/label";

import "./field.css";

function Field({
	label,
	required,
	error,
	description,
	orientation = "vertical",
	children,
}: {
	label?: React.ReactNode;
	required?: boolean;
	error?: React.ReactNode;
	description?: React.ReactNode;
	children?: React.ReactNode;
	orientation?: "vertical" | "horizontal";
}) {
	return (
		<BaseField.Root data-slot="field-root" data-orientation={orientation}>
			<div data-slot="field-label">
				<Label render={<BaseField.Label />} required={required}>
					{label}
				</Label>

				{!!description && (
					<InputDescription render={<BaseField.Description />}>
						{description}
					</InputDescription>
				)}
			</div>

			<div data-slot="field-input">
				{children}

				{!!error && (
					<InputError render={<BaseField.Error match />} data-slot="field-error">
						{error}
					</InputError>
				)}
			</div>
		</BaseField.Root>
	);
}

export { Field };
